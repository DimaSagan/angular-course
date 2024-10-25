import { Component, OnInit } from '@angular/core';
import { PrimengMovieCardComponent } from "../../components/primeng-movie-card/primeng-movie-card.component";
import { Movie } from '../../models/movie.model';
import { Observable, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { getWachlistMovies, loadUserMovieLists } from '../../store/actions';
import { ClearObservable } from '../../directives/clear-observable';
import { selectUserId, selectWachlistMoviesDb, selectWatchlist } from '../../store/selectors';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from "../../components/movie-list/movie-list.component";

@Component({
  selector: 'app-bookmarks-page',
  standalone: true,
  templateUrl: './bookmarks-page.component.html',
  styleUrl: './bookmarks-page.component.scss',
  imports: [PrimengMovieCardComponent, CommonModule, MovieListComponent]
})
export class BookmarksPageComponent extends ClearObservable implements OnInit {
  watchlist$: Observable<Movie[] | null>
  userId!:string
  visible: boolean = false

  constructor(private store: Store) {
    super()
    this.watchlist$ = this.store.select(selectWachlistMoviesDb).pipe(
      takeUntil(this.destroy$) 
    )
   }
  ngOnInit(): void {
    this.store.select(selectUserId).pipe(takeUntil(this.destroy$)).subscribe((uid) => {
      if (uid) {
        this.userId = uid
        this.store.dispatch(getWachlistMovies({ userId: this.userId }))
        this.visible = !this.visible
      }
    })

  }
}
