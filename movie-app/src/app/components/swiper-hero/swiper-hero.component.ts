import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { RouterLink } from '@angular/router';
import { SwiperContainer } from 'swiper/element';


@Component({
  selector: 'app-swiper-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './swiper-hero.component.html',
  styleUrl: './swiper-hero.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class SwiperHeroComponent implements OnInit, AfterViewInit {
  
  @Input() movies: Movie[] | null = []
  backdropPath = 'https://image.tmdb.org/t/p/original'
  minCounterNumber: number = 1
  maxCounterNumber: number = 1
  @ViewChild('swiper') swiperRef!: ElementRef<SwiperContainer>;
  initialized =false 
  constructor() { }
  ngOnInit(): void {
    if (this.movies) {
      this.maxCounterNumber = this.movies.length
    }
  }

  ngAfterViewInit(): void {
    if (this.swiperRef && this.swiperRef.nativeElement.swiper) {
      this.initialized = true
    } else {
      console.error('Error: Swiper not initialized.');
    }
  }

  changesSlide(prevOrNext: number): void {
    const swiperSlides = this.swiperRef.nativeElement.swiper;
    if (this.initialized) {
      if (prevOrNext === -1 && this.minCounterNumber !== 1) {
        swiperSlides.slidePrev();
        this.minCounterNumber--;
      } else if (prevOrNext === 1 && this.minCounterNumber !== this.maxCounterNumber) {
        swiperSlides.slideNext();
        this.minCounterNumber++;
      }
    }
  }

}
