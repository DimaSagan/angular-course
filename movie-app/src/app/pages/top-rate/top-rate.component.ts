import { Component, OnInit } from '@angular/core';
import { PrimengMovieCardComponent } from "../../components/primeng-movie-card/primeng-movie-card.component";
import { HeaderComponent } from "../../components/header/header.component";
import { Movie } from '../../models/movie.model';
import { Store } from '@ngrx/store';
import { loadMovies } from '../../store/actions';
import { ClearObservable } from '../../directives/clear-observable';
import { selectTopRated } from '../../store/selectors';
import { takeUntil } from 'rxjs';
import { SortBarComponent } from "../../components/sort-bar/sort-bar.component";
@Component({
    selector: 'app-top-rate',
    standalone: true,
    templateUrl: './top-rate.component.html',
    styleUrl: './top-rate.component.scss',
    imports: [PrimengMovieCardComponent, HeaderComponent, SortBarComponent]
})
export class TopRateComponent extends ClearObservable implements OnInit{
  topRatedMovies: Movie[] = []
  sorted: boolean = false
  constructor(private store: Store) {
    super()
  }
  ngOnInit(): void {
    this.store.dispatch(loadMovies({ listName: 'top_rated'}))
    this.store.select(selectTopRated).pipe(takeUntil(this.destroy$)).subscribe(movies => {
      this.topRatedMovies = movies?.results ?? []
    })
  }

  sortByRating() {
    if (this.topRatedMovies) {
      if (!this.sorted) {
        this.topRatedMovies = [...this.topRatedMovies].sort((a, b) => b.vote_average - a.vote_average)
        this.sorted = true
      } else {
        this.topRatedMovies = [...this.topRatedMovies].sort((a, b) => a.vote_average - b.vote_average)
        this.sorted = false
      }
    }
  }

  sortByTitle() {
    if (this.topRatedMovies) {
      if (!this.sorted) {
        this.topRatedMovies = [...this.topRatedMovies].sort((a, b) => a.title.localeCompare(b.title))
        this.sorted = true
      } else {
        this.topRatedMovies = [...this.topRatedMovies].sort((a, b) => b.title.localeCompare(a.title))
        this.sorted = false
      }
    }
  }
}
