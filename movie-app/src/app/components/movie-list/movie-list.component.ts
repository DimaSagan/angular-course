import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PrimengMovieCardComponent } from "../primeng-movie-card/primeng-movie-card.component";
import { SortBarComponent } from "../sort-bar/sort-bar.component";
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadMovies } from '../../store/actions';
import { Movie } from '../../models/movie.model';
import { ClearObservable } from '../../directives/clear-observable';
import { TitleTransformPipe } from "../../pipes/title-transform/title-transform.pipe";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, PrimengMovieCardComponent, SortBarComponent, TitleTransformPipe],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent extends ClearObservable implements OnInit {
  // @Input() data: Movie[] = [] 
  @Input() data: any= []

  listName!: string | undefined
  sorted: boolean = false

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) { super() }

  ngOnInit(): void {
    this.listName = this.activatedRoute.routeConfig?.path
    if (this.listName) {
      this.getMovieList(this.listName)
    }
  }

  getMovieList(listName: string) {
    this.store.dispatch(loadMovies({ listName: listName }))
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
}
