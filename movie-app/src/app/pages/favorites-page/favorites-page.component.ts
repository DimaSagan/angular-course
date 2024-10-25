import { Component, OnInit } from '@angular/core';
import { PrimengMovieCardComponent } from "../../components/primeng-movie-card/primeng-movie-card.component";
import { Movie } from '../../models/movie.model';
import { takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadUserMovieLists } from '../../store/actions';
import { ClearObservable } from '../../directives/clear-observable';
import { selectFavorite } from '../../store/selectors';

@Component({
  selector: 'app-favorites-page',
  standalone: true,
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.scss',
  imports: [PrimengMovieCardComponent]
})
export class FavoritesPageComponent extends ClearObservable implements OnInit {
  favorite?: Movie[]

  constructor(private store: Store) {
    super()
  }

  ngOnInit(): void {
    this.store.dispatch(loadUserMovieLists({ listName: 'favorite' }))
    this.store.select(selectFavorite).pipe(takeUntil(this.destroy$)).subscribe(movies => {
      this.favorite = movies?.results ?? []
    })
  }
}

