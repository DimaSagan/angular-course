import { Component, OnInit } from '@angular/core';
import { PrimengMovieCardComponent } from "../../components/primeng-movie-card/primeng-movie-card.component";
import { HeaderComponent } from "../../components/header/header.component";
import { Movie } from '../../models/movie.model';
import { Store } from '@ngrx/store';
import { loadMovies } from '../../store/actions';
import { ClearObservable } from '../../directives/clear-observable';
import { selectUpcoming } from '../../store/selectors';
import { takeUntil } from 'rxjs';
@Component({
    selector: 'app-upcoming',
    standalone: true,
    templateUrl: './upcoming.component.html',
    styleUrl: './upcoming.component.scss',
    imports: [PrimengMovieCardComponent, HeaderComponent]
})
export class UpcomingComponent extends ClearObservable implements OnInit {
  upcomingMovies: Movie[] = []
  
  constructor(private store: Store) {
    super()
   }
  
  ngOnInit(): void {
    this.store.dispatch(loadMovies({ listName: 'upcoming'}))
    this.store.select(selectUpcoming).pipe(takeUntil(this.destroy$)).subscribe(movies => {
      this.upcomingMovies = movies?.results ?? []
    })
  }
}
