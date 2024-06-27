import { Component, OnInit } from '@angular/core';
import { PrimengMovieCardComponent } from "../../components/primeng-movie-card/primeng-movie-card.component";
import { HeaderComponent } from "../../components/header/header.component";
import { MovieService } from '../../servises/movie.service';
@Component({
    selector: 'app-now-playing',
    standalone: true,
    templateUrl: './now-playing.component.html',
    styleUrl: './now-playing.component.scss',
    imports: [PrimengMovieCardComponent, HeaderComponent]
})
export class NowPlayingComponent implements OnInit {

  nowPlayingMovies:any[] = []

  constructor(private movieService: MovieService) { }
  
  ngOnInit(): void {
    this.nowPlayingMovies = this.movieService.getNowPlayingMovies()
  }
}
