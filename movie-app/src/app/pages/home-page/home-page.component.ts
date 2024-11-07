import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SwiperComponent } from "../../components/swiper/swiper.component";
import { Store } from '@ngrx/store';
import { filter, map, Observable, timer } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { selectNowPlayingMovies, selectPopular, selectTopRated, selectUpcoming } from '../../store/selectors';
import { CommonModule } from '@angular/common';
import { PrimengMovieCardComponent } from "../../components/primeng-movie-card/primeng-movie-card.component";
import { RouterLink } from '@angular/router';
import { SwiperHeroComponent } from "../../components/swiper-hero/swiper-hero.component";
import { IntersectionObserverDirective } from '../../directives/intersection-observer.directive';
import { ScrollListenerDirective } from '../../directives/scroll-listener.directive';
import { CanComponentDeactivate } from '../../guards/can-deactivate.guard';
import { LoaderService } from '../../servises/loader.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SwiperComponent, CommonModule, PrimengMovieCardComponent, RouterLink, SwiperHeroComponent, IntersectionObserverDirective, ScrollListenerDirective],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit, AfterViewInit, CanComponentDeactivate  {

  nowPlaying$!: Observable<Movie[]>;
  popular$!: Observable<Movie[]>
  topRated$!: Observable<Movie[]>
  upcoming$!: Observable<Movie[]>
  gray = false
  mostPopular!: Observable<Movie[]>
  deactivate = false
  bgs: string[] = []

  nowPlayingLink = 'now_playing'
  popularLink = 'popular'
  topRatedLink = 'top_rated'
  upcomingLink = 'upcoming'



  constructor(
    private store: Store,
    private cd: ChangeDetectorRef,
    private loader: LoaderService
  ) { }


  ngOnInit(): void {
    this.nowPlaying$ = this.store.select(selectNowPlayingMovies).pipe(map(arr => arr.slice(0, 10)))
    this.popular$ = this.store.select(selectPopular).pipe(map(arr => arr.slice(0, 10)))
    this.topRated$ = this.store.select(selectTopRated).pipe(map(arr => arr.slice(0, 10)))
    this.upcoming$ = this.store.select(selectUpcoming).pipe(map(arr => arr.slice(0, 10)))

    this.mostPopular = this.store.select(selectPopular).pipe(
      map(arr => arr.reduce((compleatArr, movie) => {
        if (movie.vote_average >= 7.3 && compleatArr.length < 10) {
          compleatArr.push(movie)
        }
        return compleatArr
      }, [] as Movie[]))
    )

    this.store.select(selectUpcoming).subscribe(movies => {
      this.bgs = movies.reduce((prevArr: string[], movie) => {
        if (movie) {
          prevArr.push(movie.poster_path)
        }
        return prevArr;
      }, []).slice(0,21)
    })
  }

  ngAfterViewInit(): void {
    this.randomPosition()
  }

  randomPosition() {
    const leftPosition: number[] = this.generateRandomNumbers(80, 4)
    const topPosition: number[] = Array.from({ length: 20 }, (_, index) => (index % 2 === 0 ? 0 : 35))
    let cards = document.querySelectorAll('.bg-wrapper')

    for (let n = 0; n < cards.length; n++) {
      const randomScale = Math.random() * (1.2 - 1) + 1;
      const card = cards[n] as HTMLElement
      card.style.left = `${leftPosition[n]}%`
      card.style.top = `${topPosition[n]}%`
      card.style.transform = `scale(${randomScale})` 
      setTimeout(() => {
        card.classList.add('visible')
      }, n*100)
    }
    setTimeout(() => {
      this.gray = true
    }, 2800)
  }

  generateRandomNumbers(maxValue: number, steps: number) {
    const numbers: number[] = []
    for (let i = 0; i < maxValue; i += steps) {
      numbers.push(i)
    }
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    return numbers
  }

  canDeactivate(): Observable<boolean> {
    this.loader.hideLoader()
    this.deactivate = true
    return timer(500).pipe(
      map(() => true)
    )
  }
}
