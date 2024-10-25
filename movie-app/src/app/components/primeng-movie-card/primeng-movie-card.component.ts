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
import { addMovieToFavorite, addMovieToWachlist, putMovieFromFavorites, putMovieFromWachlist, setMovieToUserList } from '../../store/actions';
import { selectFavoriteMoviesIds, selectFavoritesMoviesDbIds, selectUserId, selectWachlistMoviesDbIds, selectWatchlistIds } from '../../store/selectors';
import { Observable, takeUntil } from 'rxjs';
import { ClearObservable } from '../../directives/clear-observable';
import { PlaylistFireBaseServise } from '../../servises/playlist-service-fire-base.service';
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
  // userId!: Observable<string | null> 
  userId!: string|null
  imgFalsePath:string = 'https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko='
  constructor(
    private router: ActivatedRoute,
    private movieService: MovieService,
    private store: Store,
  private firePlaylistService: PlaylistFireBaseServise) {
    super()
  }
  ngOnInit(): void {
    this.store.select(selectFavoritesMoviesDbIds).pipe(takeUntil(this.destroy$)).subscribe(ids => {
      this.favoriteIsActive = ids.includes(this.mov.id)
    })

    this.store.select(selectWachlistMoviesDbIds).pipe(takeUntil(this.destroy$)).subscribe(ids => {
      this.watchListIsActive = ids.includes(this.mov.id)
    })
    if (this.router.snapshot.routeConfig?.path === 'favorite' || this.router.snapshot.routeConfig?.path === 'watchlist') this.buttonSwich = true
  }

  addMovieToFavorite(mov: Movie) {
    let action = !this.favoriteIsActive
    // this.store.dispatch(setMovieToUserList({ listName: 'favorite', movieId: mov.id, action }))
    if (action) {
      this.store.dispatch(addMovieToFavorite({ movie: mov }))
    } else {
      this.store.dispatch(putMovieFromFavorites({movie:mov}))
    }
    
  }
  addMovieToWatchlist(mov: Movie) {
    let action = !this.watchListIsActive
    // this.store.dispatch(setMovieToUserList({ listName: 'watchlist', movieId: mov.id, action }))
    if (action) {
      this.store.dispatch(addMovieToWachlist({ movie: mov }))
    } else {
      this.store.dispatch(putMovieFromWachlist({movie:mov}))
      
    }
  }


  deleteMovieFromlist(mov: Movie) {
    let listName: string = this.router.snapshot.routeConfig?.path ?? ''
    if (listName === 'favorite') {
      this.store.dispatch(putMovieFromFavorites({movie:mov}))
    } else {
      this.store.dispatch(putMovieFromWachlist({movie:mov}))
    }
    
  }

 
}
