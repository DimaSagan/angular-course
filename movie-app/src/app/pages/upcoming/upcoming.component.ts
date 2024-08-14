import { Component, OnInit } from '@angular/core';
import { PrimengMovieCardComponent } from "../../components/primeng-movie-card/primeng-movie-card.component";
import { HeaderComponent } from "../../components/header/header.component";
import { Movie } from '../../models/movie.model';
import { Store } from '@ngrx/store';
import { loadMovies } from '../../store/actions';
import { ClearObservable } from '../../directives/clear-observable';
import { selectUpcoming } from '../../store/selectors';
import { takeUntil } from 'rxjs';
import { SortBarComponent } from "../../components/sort-bar/sort-bar.component";
@Component({
  selector: 'app-upcoming',
  standalone: true,
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.scss',
  imports: [PrimengMovieCardComponent, HeaderComponent, SortBarComponent]
})
export class UpcomingComponent extends ClearObservable implements OnInit {
  upcomingMovies: Movie[] = []
  sorted: boolean = false
  constructor(private store: Store) {
    super()
  }

  ngOnInit(): void {
    this.store.dispatch(loadMovies({ listName: 'upcoming' }))
    this.store.select(selectUpcoming).pipe(takeUntil(this.destroy$)).subscribe(movies => {
      this.upcomingMovies = movies?.results ?? []
    })
  }

  sortByRating() {
    if (this.upcomingMovies) {
      if (!this.sorted) {
        this.upcomingMovies = [...this.upcomingMovies].sort((a, b) => b.vote_average - a.vote_average)
        this.sorted = true
      } else {
        this.upcomingMovies = [...this.upcomingMovies].sort((a, b) => a.vote_average - b.vote_average)
        this.sorted = false
      }
    }
  }

  sortByTitle() {
    if (this.upcomingMovies) {
      if (!this.sorted) {
        this.upcomingMovies = [...this.upcomingMovies].sort((a, b) => a.title.localeCompare(b.title))
        this.sorted = true
      } else {
        this.upcomingMovies = [...this.upcomingMovies].sort((a, b) => b.title.localeCompare(a.title))
        this.sorted = false
      }
    }
  }
}
