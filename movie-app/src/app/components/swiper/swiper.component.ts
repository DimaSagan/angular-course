import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { PrimengMovieCardComponent } from '../primeng-movie-card/primeng-movie-card.component';
import { Movie } from '../../models/movie.model';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { RouterLink } from '@angular/router';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [PrimengMovieCardComponent, CommonModule, RouterLink],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SwiperComponent implements AfterViewInit {

  swiperConfig: any = {
    breakpoints: {
      992: {
        slidesPerView: 5.5
      },
      767.98: {
        slidesPerView: 3.5
      },
      320: {
        slidesPerView: 2.5,
        spaceBetween: 10

      }
    }
  }


  @Input() movies: Movie[] | null = null
  @Input() fullListLink!: string
  @ViewChild('swiper') swiperRef!: ElementRef<SwiperContainer>;
  listLink: string
  constructor() {
    this.listLink = this.fullListLink

  }

  ngAfterViewInit(): void {
    if (this.swiperRef && this.swiperRef.nativeElement.swiper) {
      console.log('Swiper инициализирован:', this.swiperRef.nativeElement.swiper);
    } else {
      console.error('Swiper не был инициализирован.');
    }
  }


  changesSlide(prevOrNext: number): void {
    const swiperInstance = this.swiperRef.nativeElement.swiper;
    if (swiperInstance) {
      prevOrNext === -1 ? swiperInstance.slidePrev() : swiperInstance.slideNext();
    } else {
      console.error('Ошибка: Swiper не инициализирован.');
    }
  }

}
