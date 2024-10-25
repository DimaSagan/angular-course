import { Component, OnInit } from '@angular/core';
import { PrimengMovieCardComponent } from "../../components/primeng-movie-card/primeng-movie-card.component";
import { Movie } from '../../models/movie.model';
import { Observable, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { getFavoritesMovies, loadUserMovieLists } from '../../store/actions';
import { ClearObservable } from '../../directives/clear-observable';
import { selectFavorite, selectFavoritesMoviesDb, selectUserId } from '../../store/selectors';
import { Auth } from '@angular/fire/auth';
import { AuthFireBase } from '../../servises/autnFireBase.service';
import { MovieListComponent } from "../../components/movie-list/movie-list.component";
import { CommonModule } from '@angular/common';
// import { Auth } from 'firebase/auth';

@Component({
  selector: 'app-favorites-page',
  standalone: true,
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.scss',
  imports: [PrimengMovieCardComponent, MovieListComponent, CommonModule]
})
export class FavoritesPageComponent extends ClearObservable implements OnInit {
  favorite$: Observable<Movie[] | null>
  userId!: string
  visible: boolean = false
  constructor(private store: Store, private auth: Auth, private authDb: AuthFireBase) {
    super()

    this.favorite$ = this.store.select(selectFavoritesMoviesDb).pipe(
      takeUntil(this.destroy$)
    )
  }

  ngOnInit(): void {
    this.store.select(selectUserId).pipe(takeUntil(this.destroy$)).subscribe((uid) => {
      if (uid) {
        this.userId = uid
        this.store.dispatch(getFavoritesMovies({ userId: this.userId }))
        this.visible = !this.visible
      }
    })
  }
}

