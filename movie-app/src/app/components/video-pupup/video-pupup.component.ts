import { Component, Input, OnInit } from '@angular/core';
import { VideoPopupService } from '../../servises/video-popup.service';
import { Observable, of, Subject, switchMap, take, takeUntil, tap } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-pupup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-pupup.component.html',
  styleUrl: './video-pupup.component.scss'
})
export class VideoPupupComponent implements OnInit {
  @Input() link: Observable<string | null> = of('')
  url!: SafeResourceUrl
  visibility$!: boolean
  private destroy$ = new Subject<void>();
  constructor(private videoPopupService: VideoPopupService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.videoPopupService.getPopupStatus().pipe(
      switchMap(visibility => {
        this.visibility$ = visibility;
        if (!visibility) {
          return of(null);
        }
        return this.link;
      }),
      tap(addres => {
        if (addres) {
          // Проверка на null или пустую строку
          const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            `https://www.youtube.com/embed/${addres}?si=iXKJtgXRKcVSlTtT`
          );
          this.url = safeUrl;
        }
      }),
      takeUntil(this.destroy$)
    ).subscribe();
    
  }
  hide() {
    
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(``)
    this.videoPopupService.hide()
  }
}
