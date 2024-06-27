import { Component, OnInit } from '@angular/core';
import { PrimengMovieCardComponent } from "../../components/primeng-movie-card/primeng-movie-card.component";
import { MovieService } from '../../servises/movie.service';

@Component({
  selector: 'app-bookmarks-page',
  standalone: true,
  templateUrl: './bookmarks-page.component.html',
  styleUrl: './bookmarks-page.component.scss',
  imports: [PrimengMovieCardComponent]
})
export class BookmarksPageComponent implements OnInit {
  data: any
  constructor(private movieService: MovieService) { }
  ngOnInit() {
    this.data = this.movieService.getBookmarksList()
  }
}
