import { CommonModule } from '@angular/common'
import { Component, OnInit} from '@angular/core';
import { MovieListComponent } from "../../components/movie-list/movie-list.component";
import { Observable, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { ClearObservable } from '../../directives/clear-observable';
import { Movie } from '../../models/movie.model';
import { selectNowPlayingMovies, selectPopular } from '../../store/selectors';
@Component({
  selector: 'app-now-playing',
  standalone: true,
  templateUrl: './now-playing.component.html',
  styleUrl: './now-playing.component.scss',
  imports: [CommonModule, MovieListComponent]
})
export class NowPlayingComponent extends ClearObservable implements OnInit {
  
  moviesResult$: Observable<Movie[]>

  constructor(
    private store: Store,) {

    super()

    this.moviesResult$ = this.store.select(selectNowPlayingMovies).pipe(
      takeUntil(this.destroy$) 
    )
  }

  ngOnInit(): void {
  }
}
