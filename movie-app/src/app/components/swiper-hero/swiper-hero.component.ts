import { AfterViewInit, ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, Input, NgZone, OnInit} from '@angular/core';
import { Movie } from '../../models/movie.model';
import { RouterLink } from '@angular/router';
import Swiper from 'swiper';


@Component({
  selector: 'app-swiper-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './swiper-hero.component.html',
  styleUrl: './swiper-hero.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class SwiperHeroComponent implements OnInit, AfterViewInit {
  @Input() movies: Movie[] |null = []

  backdropPath = 'https://image.tmdb.org/t/p/original'

  minCouterNumber:number = 1
  maxCouterNumber: number = 1
  
  constructor(private cd: ChangeDetectorRef, private ngZone: NgZone){}
  ngOnInit(): void {
    if (this.movies) {
      this.maxCouterNumber = this.movies.length
     }
    // this.cd.detectChanges()
  }

  ngAfterViewInit(): void {
   
  }

  upCounterNumber() {
    this.minCouterNumber++
    this.cd.detectChanges()
    console.log('+')
    // this.ngZone.run(() => {  // Помещаем изменение состояния в зону Angular
    //   if (this.minCouterNumber < this.maxCouterNumber) {
    //     this.minCouterNumber++;
    //   } else {
    //     this.minCouterNumber = 1;
    //   }
    //   console.log('Счётчик увеличен:', this.minCouterNumber);
    // });
  }  
  downCounterNumber() { 
    this.minCouterNumber--
  }

 

}
