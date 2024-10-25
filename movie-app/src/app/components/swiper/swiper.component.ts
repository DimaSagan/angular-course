import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PrimengMovieCardComponent } from '../primeng-movie-card/primeng-movie-card.component';
import { Movie } from '../../models/movie.model';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [PrimengMovieCardComponent, CommonModule, RouterLink],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SwiperComponent implements OnInit{

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
        spaceBetween:10

      }
    }
}

  // @Input() movies$!: Observable<Movie[]> 
  @Input() movies: Movie[]|null = null
  @Input() fullListLink!: string 
  listLink:string
  constructor() {
    this.listLink = this.fullListLink
    
  }

  ngOnInit(): void {
  }

  
}
