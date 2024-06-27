import { Component, OnInit } from '@angular/core';
import { PrimengMovieCardComponent } from "../../components/primeng-movie-card/primeng-movie-card.component";
import { MovieService } from '../../servises/movie.service';

@Component({
  selector: 'app-favorites-page',
  standalone: true,
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.scss',
  imports: [PrimengMovieCardComponent]
})
export class FavoritesPageComponent implements OnInit {
  data: any
  constructor(private movieService: MovieService) { }
  ngOnInit() {
    this.data = this.movieService.getFavoriteList()
  }
}
