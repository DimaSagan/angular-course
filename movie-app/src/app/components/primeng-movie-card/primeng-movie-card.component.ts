import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TimeFormatPipe } from '../../pipes/time-format/time-format.pipe';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RateFormatPipe } from "../../pipes/rate-format/rate-format.pipe";
import { MovieService } from '../../servises/movie.service';
import { Movie } from '../../models/movie.model';
import { Store } from '@ngrx/store';
import { setMovieToUserList } from '../../store/actions';
import { selectFavoriteMoviesIds, selectWatchlistIds } from '../../store/selectors';
import { takeUntil } from 'rxjs';
import { ClearObservable } from '../../directives/clear-observable';
@Component({
  selector: 'app-primeng-movie-card',
  standalone: true,
  templateUrl: './primeng-movie-card.component.html',
  styleUrl: './primeng-movie-card.component.scss',
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    TimeFormatPipe,
    RouterModule,
    RateFormatPipe
  ]
})
export class PrimengMovieCardComponent extends ClearObservable implements OnInit {
  @Input() mov: any
  public buttonSwich: boolean = false
  favoriteIsActive: boolean = false;
  watchListIsActive: boolean = false;

  constructor(private router: ActivatedRoute, private movieService: MovieService, private store: Store) {
    super()
  }
  ngOnInit(): void {

    this.store.select(selectFavoriteMoviesIds).pipe(takeUntil(this.destroy$)).subscribe(ids => {
      this.favoriteIsActive = ids.includes(this.mov.id)
    })

    this.store.select(selectWatchlistIds).pipe(takeUntil(this.destroy$)).subscribe(ids => {
      this.watchListIsActive = ids.includes(this.mov.id)
    })
    if (this.router.snapshot.routeConfig?.path === 'favorite' || this.router.snapshot.routeConfig?.path === 'watchlist') this.buttonSwich = true
  }

  addMovieToFavorite(mov: Movie) {
    let action = !this.favoriteIsActive
    this.store.dispatch(setMovieToUserList({ listName: 'favorite', movieId: mov.id, action }))
  }
  addMovieToWatchlist(mov: Movie) {
    let action = !this.watchListIsActive
    this.store.dispatch(setMovieToUserList({ listName: 'watchlist', movieId: mov.id, action }))
  }


  deleteMovieFromlist(mov: any) {
    let listName: string = this.router.snapshot.routeConfig?.path ?? ''
    let action = false
    this.store.dispatch(setMovieToUserList({ listName: listName, movieId: mov.id, action }))
  }

}
