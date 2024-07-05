import { Component, OnInit } from '@angular/core';
import { PrimengMovieCardComponent } from "../../components/primeng-movie-card/primeng-movie-card.component";
import { HeaderComponent } from "../../components/header/header.component";
import { MovieService } from '../../servises/movie.service';
import { Movie } from '../../models/movie.model';
@Component({
    selector: 'app-upcoming',
    standalone: true,
    templateUrl: './upcoming.component.html',
    styleUrl: './upcoming.component.scss',
    imports: [PrimengMovieCardComponent, HeaderComponent]
})
export class UpcomingComponent implements OnInit {
  upcomingMovies:Movie[] = []
  constructor(private movieService: MovieService){}
  ngOnInit(): void {
    this.movieService.getUpcomingMovies().subscribe(movies => {
      this.upcomingMovies=movies.results
    })
  }
}
