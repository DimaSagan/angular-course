import { Component, OnInit } from '@angular/core';
import { PrimengMovieCardComponent } from "../../components/primeng-movie-card/primeng-movie-card.component";
import { HeaderComponent } from "../../components/header/header.component";
import { Movie } from '../../models/movie.model';
import { Store } from '@ngrx/store';
import { loadMovies } from '../../store/actions';
import { ClearObservable } from '../../directives/clear-observable';
import { selectTopRated } from '../../store/selectors';
import { takeUntil } from 'rxjs';
@Component({
    selector: 'app-top-rate',
    standalone: true,
    templateUrl: './top-rate.component.html',
    styleUrl: './top-rate.component.scss',
    imports: [PrimengMovieCardComponent, HeaderComponent]
})
export class TopRateComponent extends ClearObservable implements OnInit{
  topRatedMovies: Movie[] = []
  constructor(private store: Store) {
    super()
  }
  ngOnInit(): void {
    this.store.dispatch(loadMovies({ listName: 'top_rated'}))
    this.store.select(selectTopRated).pipe(takeUntil(this.destroy$)).subscribe(movies => {
      this.topRatedMovies = movies?.results ?? []
    })
  }
}
