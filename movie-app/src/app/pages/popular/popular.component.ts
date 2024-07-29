import { Component, OnInit } from '@angular/core';
import { PrimengMovieCardComponent } from "../../components/primeng-movie-card/primeng-movie-card.component";
import { HeaderComponent } from "../../components/header/header.component";
import { Movie } from '../../models/movie.model';
import { Store } from '@ngrx/store';
import { loadMovies } from '../../store/actions';
import { ClearObservable } from '../../directives/clear-observable';
import { takeUntil } from 'rxjs';
import { selectPopular } from '../../store/selectors';
@Component({
  selector: 'app-popular',
  standalone: true,
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss',
  imports: [PrimengMovieCardComponent, HeaderComponent]
})
export class PopularComponent extends ClearObservable  implements OnInit {
  popularMovies: Movie[] = []

  constructor( private store: Store) { 
    super()
  }

  ngOnInit(): void {

    this.store.dispatch(loadMovies({ listName: 'popular'}))
    this.store.select(selectPopular).pipe(takeUntil(this.destroy$)).subscribe(movies => {
      this.popularMovies = movies?.results ?? []
    })
  }
}
