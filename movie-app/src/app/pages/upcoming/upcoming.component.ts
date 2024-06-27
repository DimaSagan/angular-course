import { Component, OnInit } from '@angular/core';
import { PrimengMovieCardComponent } from "../../components/primeng-movie-card/primeng-movie-card.component";
import { HeaderComponent } from "../../components/header/header.component";
import { MovieService } from '../../servises/movie.service';
@Component({
    selector: 'app-upcoming',
    standalone: true,
    templateUrl: './upcoming.component.html',
    styleUrl: './upcoming.component.scss',
    imports: [PrimengMovieCardComponent, HeaderComponent]
})
export class UpcomingComponent implements OnInit {
  upcomingMovies:any[] = []
  constructor(private movieService: MovieService){}
  ngOnInit(): void {
    this.upcomingMovies = this.movieService.getUpcomingMovies()
  }
}
