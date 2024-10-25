import { Component, OnInit } from '@angular/core';
import { PrimengMovieCardComponent } from "../../components/primeng-movie-card/primeng-movie-card.component";
import { HeaderComponent } from "../../components/header/header.component";
import { MovieService } from '../../servises/movie.service';
@Component({
  selector: 'app-popular',
  standalone: true,
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss',
  imports: [PrimengMovieCardComponent, HeaderComponent]
})
export class PopularComponent implements OnInit {
  popularMovies: any[] = []

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.popularMovies = this.movieService.getPopularMovies()
  }
}
