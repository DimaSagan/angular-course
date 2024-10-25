import { Component, OnInit } from '@angular/core';
import { Movie, MovieApiModel } from '../../models/movie.model';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { PrimengMovieCardComponent } from '../../components/primeng-movie-card/primeng-movie-card.component';
import { ClearObservable } from '../../directives/clear-observable';
import { selectedSearchResult } from '../../store/selectors';
import { filter, map, Observable, of, takeUntil } from 'rxjs';
import { MovieListComponent } from "../../components/movie-list/movie-list.component";

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [CommonModule, PrimengMovieCardComponent, MovieListComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent extends ClearObservable implements OnInit {
  // searchResult!: Movie[] | undefined

  searchResults$!:Observable<Movie[]>
  constructor(private store: Store) {
    super()
  }
  
  ngOnInit(): void {
    // this.store.select(selectedSearchResult).pipe(takeUntil(this.destroy$)).subscribe(movies => {
    //   this.searchResult = movies?.results
    // })

    this.searchResults$ = this.store.select(selectedSearchResult).pipe(
      filter((result): result is MovieApiModel => !!result),
      map((result:MovieApiModel)=>result.results)
    )
  }
}
