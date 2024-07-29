import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core';
import { PrimengMovieCardComponent } from "../../components/primeng-movie-card/primeng-movie-card.component";
import { HeaderComponent } from "../../components/header/header.component";

import { Store } from '@ngrx/store';
import { loadMovies } from '../../store/actions';

import { selectNowPlayingMovies } from '../../store/selectors';
import { Movie } from '../../models/movie.model';
import { Observable, takeUntil } from 'rxjs';
import { ClearObservable } from '../../directives/clear-observable';
@Component({
  selector: 'app-now-playing',
  standalone: true,
  templateUrl: './now-playing.component.html',
  styleUrl: './now-playing.component.scss',
  imports: [CommonModule, PrimengMovieCardComponent, HeaderComponent]
})
export class NowPlayingComponent extends ClearObservable implements OnInit {

  nowPlayingMovies?: Movie[]

  constructor(private store: Store) {
    super()
  }

  ngOnInit(): void {
    this.store.dispatch(loadMovies({ listName: 'now_playing' }))
    this.store.select(selectNowPlayingMovies).pipe(takeUntil(this.destroy$)).subscribe(movies => {
      this.nowPlayingMovies = movies?.results ?? []
    })
  }
}
