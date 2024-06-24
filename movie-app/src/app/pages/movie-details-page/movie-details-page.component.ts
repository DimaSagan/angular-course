import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } from '../../../assets/mock-data/mock-data2';
import { RateFormatPipe } from "../../pipes/rate-format/rate-format.pipe";
import { HeaderComponent } from "../../components/header/header.component";

@Component({
    selector: 'app-movie-details-page',
    standalone: true,
    templateUrl: './movie-details-page.component.html',
    styleUrl: './movie-details-page.component.scss',
    imports: [RateFormatPipe, HeaderComponent]
})
export class MovieDetailsPageComponent implements OnInit {
  movie: any
  movies = [
    ...nowPlayingMovies,
    ...popularMovies,
    ...topRatedMovies,
    ...upcomingMovies
  ]
  imgPath = 'https://image.tmdb.org/t/p/w500'
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get('id') 
    if(id)
    this.movie = this.movies.find((movieItem)=> movieItem.id === parseInt(id))
  }
}
