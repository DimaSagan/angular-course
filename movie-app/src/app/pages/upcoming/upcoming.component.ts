import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { Store } from '@ngrx/store';
import { ClearObservable } from '../../directives/clear-observable';
import { selectUpcoming } from '../../store/selectors';
import { Observable, takeUntil } from 'rxjs';
import { MovieListComponent } from "../../components/movie-list/movie-list.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-upcoming',
  standalone: true,
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.scss',
  imports: [MovieListComponent, CommonModule]
})
export class UpcomingComponent extends ClearObservable implements OnInit {
  moviesResult$: Observable<Movie[]>

  constructor(
    private store: Store,) {

    super()

    this.moviesResult$ = this.store.select(selectUpcoming).pipe(
      takeUntil(this.destroy$) 
    )
  }

  ngOnInit(): void {
  }
}
