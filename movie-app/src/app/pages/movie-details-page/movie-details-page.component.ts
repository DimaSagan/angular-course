import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RateFormatPipe } from "../../pipes/rate-format/rate-format.pipe";
import { MovieService } from '../../servises/movie.service';


@Component({
    selector: 'app-movie-details-page',
    standalone: true,
    templateUrl: './movie-details-page.component.html',
    styleUrl: './movie-details-page.component.scss',
    imports: [RateFormatPipe]
})
export class MovieDetailsPageComponent implements OnInit {
  movie: any
  
  imgPath = 'https://image.tmdb.org/t/p/w500'
  constructor(private movieService: MovieService, private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id) this.movieService.getMovieById(id).subscribe(moviePage => {
      this.movie = moviePage
    })
    
  }
}
