import { Component, OnInit } from '@angular/core';
import { PrimengMovieCardComponent } from "../../components/primeng-movie-card/primeng-movie-card.component";
import { HeaderComponent } from "../../components/header/header.component";
import { Movie } from '../../models/movie.model';
import { Store } from '@ngrx/store';
import { loadMovies } from '../../store/actions';
import { ClearObservable } from '../../directives/clear-observable';
import { takeUntil } from 'rxjs';
import { selectPopular } from '../../store/selectors';
import { MovieService } from '../../servises/movie.service';
import { SortBarComponent } from "../../components/sort-bar/sort-bar.component";
@Component({
  selector: 'app-popular',
  standalone: true,
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss',
  imports: [PrimengMovieCardComponent, HeaderComponent, SortBarComponent]
})
export class PopularComponent extends ClearObservable  implements OnInit {
  popularMovies: Movie[] = []
  sorted: boolean = false

  constructor( private store: Store , private movieService: MovieService) { 
    super()
  }

  ngOnInit(): void {

    this.store.dispatch(loadMovies({ listName: 'popular'}))
    this.store.select(selectPopular).pipe(takeUntil(this.destroy$)).subscribe(movies => {
      this.popularMovies = movies?.results ?? []
    })
  }

  sortByRating() {
    if (this.popularMovies) {
      if (!this.sorted) {
        this.popularMovies = [...this.popularMovies].sort((a, b) => b.vote_average - a.vote_average)
        this.sorted = true
      } else {
        this.popularMovies = [...this.popularMovies].sort((a, b) => a.vote_average - b.vote_average)
        this.sorted = false
      }
    }
  }

  
  sortByTitle() {
    if (this.popularMovies) {
      if (!this.sorted) {
        this.popularMovies = [...this.popularMovies].sort((a, b) => a.title.localeCompare(b.title))
        this.sorted = true
      } else {
        this.popularMovies = [...this.popularMovies].sort((a, b) => b.title.localeCompare(a.title))
        this.sorted = false
      }
    }
  }
}
