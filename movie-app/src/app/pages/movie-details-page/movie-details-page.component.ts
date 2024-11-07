import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RateFormatPipe } from "../../pipes/rate-format/rate-format.pipe";
import { Store } from '@ngrx/store';
import { filter, map, Observable, of, take, takeUntil, timer } from 'rxjs';
import { MovieDetailsApiModel } from '../../models/movie-details.model';
import { CommonModule, ViewportScroller } from '@angular/common';
import { DateFormatPipe } from "../../pipes/date-format/date-format.pipe";
import { RateClassPipe } from "../../pipes/rate-class/rate-class.pipe";
import { CastModel } from '../../models/credits.model';
import { selectMovieCast, selectMovieDeatailsPage, selectVideoLink } from '../../store/selectors';
import { VideoPupupComponent } from "../../components/video-pupup/video-pupup.component";
import { VideoPopupService } from '../../servises/video-popup.service';
import { TimeFormatPipe } from "../../pipes/time-format/time-format.pipe";
import { ClearObservable } from '../../directives/clear-observable';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CanComponentDeactivate } from '../../guards/can-deactivate.guard';
import { LoaderService } from '../../servises/loader.service';


@Component({
  selector: 'app-movie-details-page',
  standalone: true,
  templateUrl: './movie-details-page.component.html',
  styleUrl: './movie-details-page.component.scss',
  imports: [RateFormatPipe, CommonModule, DateFormatPipe, RateClassPipe, VideoPupupComponent, TimeFormatPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailsPageComponent extends ClearObservable implements OnInit, OnDestroy, CanComponentDeactivate {

  movie$!: Observable<MovieDetailsApiModel | null>
  cast$!: Observable<CastModel[]>
  load: boolean = false
  deactivate: boolean = false
  smallScreen: boolean = false
  bgStatus: any
  imgPath = 'https://image.tmdb.org/t/p/w500'
  bgPath = 'https://image.tmdb.org/t/p/original'


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store,
    private videoPopupService: VideoPopupService,
    private cd: ChangeDetectorRef,
    private loader: LoaderService
  ) {
    super()
  }

  ngOnInit(): void {

    this.checkViewportWidth()
    this.movie$ = this.store.select(selectMovieDeatailsPage)
    this.cast$ = this.store.select(selectMovieCast).pipe(
      map(cast => cast ? cast.slice(0, 5) : [])
    )

    this.route.data.subscribe(data => {
      this.load = false
      timer(600).subscribe(() => {
        this.load = data['data'];
        this.cd.detectChanges();
      });
    })
  }

  canDeactivate(): Observable<boolean> {
    this.loader.hideLoader()
    this.videoPopupService.hide()
    this.deactivate = true
    this.cd.detectChanges();
    // this.load = false
    this.cd.detectChanges();
    
    return timer(1400).pipe(
        map(()=>true)
      )
    
  }

  showPopup() {
    this.videoPopupService.show()
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy()
    this.videoPopupService.hide()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkViewportWidth()
  }
  checkViewportWidth(): void {
    this.smallScreen = window.innerWidth < 767.98
  }
}


