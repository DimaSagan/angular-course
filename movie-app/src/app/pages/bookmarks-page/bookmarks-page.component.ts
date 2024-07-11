import { Component, OnDestroy, OnInit } from '@angular/core';
import { PrimengMovieCardComponent } from "../../components/primeng-movie-card/primeng-movie-card.component";
import { MovieService } from '../../servises/movie.service';
import { Movie } from '../../models/movie.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bookmarks-page',
  standalone: true,
  templateUrl: './bookmarks-page.component.html',
  styleUrl: './bookmarks-page.component.scss',
  imports: [PrimengMovieCardComponent]
})
export class BookmarksPageComponent implements OnInit, OnDestroy {
  data: Movie[] = []
  private bookmarksListSubscription : Subscription

  constructor(private movieService: MovieService) {
    this.bookmarksListSubscription = new Subscription
   }
  ngOnInit(): void {
    this.bookmarksListSubscription = this.movieService.bookmarksListSubject.subscribe(movies => {
      this.data = movies
    })
  }
  ngOnDestroy(): void {
    if (this.bookmarksListSubscription) {
      this.bookmarksListSubscription.unsubscribe()
    }
  }
}
