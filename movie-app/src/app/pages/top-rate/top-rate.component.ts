import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { Store } from '@ngrx/store';
import { ClearObservable } from '../../directives/clear-observable';
import { selectTopRated } from '../../store/selectors';
import { Observable, takeUntil } from 'rxjs';
import { MovieListComponent } from "../../components/movie-list/movie-list.component";
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-top-rate',
    standalone: true,
    templateUrl: './top-rate.component.html',
    styleUrl: './top-rate.component.scss',
    imports: [MovieListComponent, CommonModule]
})
export class TopRateComponent extends ClearObservable implements OnInit{
  moviesResult$: Observable<Movie[]>

  constructor(
    private store: Store,) {

    super()

    this.moviesResult$ = this.store.select(selectTopRated).pipe(
      takeUntil(this.destroy$) 
    )
  }

  ngOnInit(): void {
  }
}
