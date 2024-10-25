import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PrimengMovieCardComponent } from "../primeng-movie-card/primeng-movie-card.component";
import { SortBarComponent } from "../sort-bar/sort-bar.component";
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadMovies, showMoreMovies } from '../../store/actions';
import { Movie } from '../../models/movie.model';
import { ClearObservable } from '../../directives/clear-observable';
import { TitleTransformPipe } from "../../pipes/title-transform/title-transform.pipe";
import { selectNowPlayingMovies, selectPopular, selectTopRated, selectUpcoming } from '../../store/selectors';
import { Observable } from 'rxjs';
type MovieListType = 'now_playing' | 'upcoming' | 'top_rated' | 'popular';
@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, PrimengMovieCardComponent, SortBarComponent, TitleTransformPipe],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})

export class MovieListComponent extends ClearObservable implements OnInit {
  @Input() data: Movie[] | null = []

  listName!: string | undefined
  sorted: boolean = false
  private currentPage: number = 2
  showMoreSwitcher: boolean = false
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) { super() }

  ngOnInit(): void {
    console.log(this.activatedRoute.routeConfig?.path)
    // if(this.activatedRoute.snapshot.url)
  //  console.log('currentPage', this.currentPage)
    this.listName = this.activatedRoute.routeConfig?.path
    if (this.listName === 'watchlist'|| this.listName === 'favorite') {
      this.showMoreSwitcher = true
    }
    
    if(this.listName!=='favorite' && this.listName!=='watchlist'){if (this.listName) {
      const savedPageNumber = sessionStorage.getItem(`${this.listName}`)
      this.currentPage = savedPageNumber? Number(savedPageNumber) : 2
      this.loadMovieListIfNeeded(this.listName)
    }}

  }

  getMovieList(listName: string) {
      { this.store.dispatch(loadMovies({ listName: listName })) }
  }

  loadMovieListIfNeeded(listName: string) {
    let selector: Observable<Movie[]> = this.store.select(selectNowPlayingMovies)

    switch (listName) {
      case 'now_playing':
        selector = this.store.select(selectNowPlayingMovies)
        break
      case 'popular':
        selector = this.store.select(selectPopular)
        break
      case 'top_rated':
        selector = this.store.select(selectTopRated)
        break
      case 'upcoming':
        selector = this.store.select(selectUpcoming)
        break
      
    }
 
      selector.subscribe(arr => {
        if (arr.length === 0) {
          this.getMovieList(listName)
        }
      })
    
  }
  trackById(index: number, movie: Movie): number {
    return movie.id;
  }
  sortByRating() {
    if (this.data) {
      if (!this.sorted) {
        this.data = [...this.data].sort((a, b) => b.vote_average - a.vote_average)
        this.sorted = true
      } else {
        this.data = [...this.data].sort((a, b) => a.vote_average - b.vote_average)
        this.sorted = false
      }
    }
  }

  sortByTitle() {
    if (this.data) {
      if (!this.sorted) {
        this.data = [...this.data].sort((a, b) => a.title.localeCompare(b.title))
        this.sorted = true
      } else {
        this.data = [...this.data].sort((a, b) => b.title.localeCompare(a.title))
        this.sorted = false
      }
    }
  }

  showMore() {
    const listName = this.listName as MovieListType
    // let pageNumber = 2
    if (this.listName && ['now_playing', 'upcoming', 'top_rated', 'popular'].includes(this.listName)) {
      this.store.dispatch(showMoreMovies({ listName: listName, pageNumber: this.currentPage }))
      this.currentPage++; // Увеличиваем `pageNumber` на 1
      sessionStorage.setItem(`${this.listName}`, this.currentPage.toString())
      console.log('page number', this.currentPage);
    } else {
      console.error('Invalid list name:', this.listName);
    }
  }
}
