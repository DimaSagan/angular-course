import { CommonModule } from '@angular/common'
import { Component, OnInit, Output } from '@angular/core';
import { PrimengMovieCardComponent } from "../../components/primeng-movie-card/primeng-movie-card.component";
import { HeaderComponent } from "../../components/header/header.component";
import { Store } from '@ngrx/store';
import { loadMovies } from '../../store/actions';
import { selectNowPlayingMovies } from '../../store/selectors';
import { Movie } from '../../models/movie.model';
import { takeUntil } from 'rxjs';
import { ClearObservable } from '../../directives/clear-observable';
import { SortBarComponent } from '../../components/sort-bar/sort-bar.component';
@Component({
  selector: 'app-now-playing',
  standalone: true,
  templateUrl: './now-playing.component.html',
  styleUrl: './now-playing.component.scss',
  imports: [CommonModule, PrimengMovieCardComponent, HeaderComponent,
    SortBarComponent]
})
export class NowPlayingComponent extends ClearObservable implements OnInit {
  nowPlayingMovies?: Movie[]
  sorted: boolean = false
  constructor(private store: Store) {
    super()
  }

  ngOnInit(): void {
    this.store.dispatch(loadMovies({ listName: 'now_playing' }))
    this.store.select(selectNowPlayingMovies).pipe(takeUntil(this.destroy$)).subscribe(movies => {
      this.nowPlayingMovies = movies?.results ?? []
    })

  }

  sortByRating() {
    if (this.nowPlayingMovies) {
      if (!this.sorted) {
        this.nowPlayingMovies = [...this.nowPlayingMovies].sort((a, b) => b.vote_average - a.vote_average)
        this.sorted = true
      } else {
        this.nowPlayingMovies = [...this.nowPlayingMovies].sort((a, b) => a.vote_average - b.vote_average)
        this.sorted = false
      }
    }
  }

  sortByTitle() {
    if (this.nowPlayingMovies) {
      if (!this.sorted) {
        this.nowPlayingMovies = [...this.nowPlayingMovies].sort((a, b) => a.title.localeCompare(b.title))
        this.sorted = true
      } else {
        this.nowPlayingMovies = [...this.nowPlayingMovies].sort((a, b) => b.title.localeCompare(a.title))
        this.sorted = false
      }
    }
  }
}
