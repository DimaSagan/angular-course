import { Component, OnInit } from '@angular/core';
import { PrimengMovieCardComponent } from "../../components/primeng-movie-card/primeng-movie-card.component";
import { HeaderComponent } from "../../components/header/header.component";
import { MovieService } from '../../servises/movie.service';
@Component({
    selector: 'app-top-rate',
    standalone: true,
    templateUrl: './top-rate.component.html',
    styleUrl: './top-rate.component.scss',
    imports: [PrimengMovieCardComponent, HeaderComponent]
})
export class TopRateComponent implements OnInit{
  topRatedMovies: any[] = []
  constructor(private movieService: MovieService){}
  ngOnInit(): void {
    this.topRatedMovies = this.movieService.getTopRatedMovies()
  }
}
