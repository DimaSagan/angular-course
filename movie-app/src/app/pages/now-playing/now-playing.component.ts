import { Component, OnInit } from '@angular/core';
import { PrimengMovieCardComponent } from "../../components/primeng-movie-card/primeng-movie-card.component";
import { HeaderComponent } from "../../components/header/header.component";
import { MovieService } from '../../servises/movie.service';
import { Movie } from '../../models/movie.model';
@Component({
    selector: 'app-now-playing',
    standalone: true,
    templateUrl: './now-playing.component.html',
    styleUrl: './now-playing.component.scss',
    imports: [PrimengMovieCardComponent, HeaderComponent]
})
export class NowPlayingComponent implements OnInit {

  nowPlayingMovies: Movie[] = []
  
  constructor(private movieService: MovieService) { }
  
  ngOnInit(): void {
    this.movieService.getNowPlayingMovies().subscribe(movies => {
     this.nowPlayingMovies=movies.results
      // console.log(movies)
    })
  }
}
