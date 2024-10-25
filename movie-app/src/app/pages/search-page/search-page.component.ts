import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { PrimengMovieCardComponent } from '../../components/primeng-movie-card/primeng-movie-card.component';
import { ClearObservable } from '../../directives/clear-observable';
import { selectedSearchResult } from '../../store/selectors';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [CommonModule, PrimengMovieCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent extends ClearObservable implements OnInit {
  searchResult!: Movie[] | undefined

  constructor(private store: Store) {
    super()
  }
  
  ngOnInit(): void {
    this.store.select(selectedSearchResult).pipe(takeUntil(this.destroy$)).subscribe(movies => {
      this.searchResult = movies?.results
    })
  }
}
