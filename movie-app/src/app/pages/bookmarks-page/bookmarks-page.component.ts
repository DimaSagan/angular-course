import { Component, OnInit } from '@angular/core';
import { PrimengMovieCardComponent } from "../../components/primeng-movie-card/primeng-movie-card.component";
import { Movie } from '../../models/movie.model';
import { takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadUserMovieLists } from '../../store/actions';
import { ClearObservable } from '../../directives/clear-observable';
import { selectWatchlist } from '../../store/selectors';

@Component({
  selector: 'app-bookmarks-page',
  standalone: true,
  templateUrl: './bookmarks-page.component.html',
  styleUrl: './bookmarks-page.component.scss',
  imports: [PrimengMovieCardComponent]
})
export class BookmarksPageComponent extends ClearObservable implements OnInit {
  watchlist?: Movie[] 

  constructor(private store: Store) {
    super()
   }
  ngOnInit(): void {
    this.store.dispatch(loadUserMovieLists({ listName: 'watchlist' }))
    this.store.select(selectWatchlist).pipe(takeUntil(this.destroy$)).subscribe(movies => {
      this.watchlist =  movies?.results ?? []
    })
  }
 
}
