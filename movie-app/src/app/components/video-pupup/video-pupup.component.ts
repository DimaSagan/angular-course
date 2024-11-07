import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { VideoPopupService } from '../../servises/video-popup.service';
import { Subject, takeUntil} from 'rxjs';
import { CommonModule } from '@angular/common';
import { YoutubePlayerComponent } from 'ngx-youtube-player';
import { Store } from '@ngrx/store';
import { selectVideoLink } from '../../store/selectors';

@Component({
  selector: 'app-video-pupup',
  standalone: true,
  imports: [CommonModule, YoutubePlayerComponent],
  templateUrl: './video-pupup.component.html',
  styleUrl: './video-pupup.component.scss'
})
export class VideoPupupComponent implements OnInit {
  url: string=''
  visibility$!:boolean
  private destroy$ = new Subject<void>();
  private player: any
  @ViewChild('youtubePlayer', { static: false }) youtubePlayer!: ElementRef;
  constructor(private videoPopupService: VideoPopupService, private store: Store, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.videoPopupService.getPopupStatus().pipe(takeUntil(this.destroy$)).subscribe(status => {
      this.visibility$=status
    })
    this.store.select(selectVideoLink).pipe(takeUntil(this.destroy$)).subscribe(id => {
      if (id) {
        this.url = id
      }
    })
  }

  
  savePlayer(player: any) {
    this.player = player
    const iframe = player.getIframe();
    if (iframe) {
      this.renderer.setStyle(iframe, 'width', '100%');
      this.renderer.setStyle(iframe, 'height', '100%');
    }
  }
  onStateChange(event: any) {
  }
  
  hide() {
    this.videoPopupService.hide()
    this.player.stopVideo()
  }
  
}
