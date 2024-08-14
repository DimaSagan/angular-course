import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RateFormatPipe } from "../../pipes/rate-format/rate-format.pipe";
import { Store } from '@ngrx/store';
import { loadMovieDetails } from '../../store/actions';
import { map, Observable} from 'rxjs';
import { MovieDetailsApiModel } from '../../models/movie-details.model';
import { selectMovieDeatailsPage } from '../../store/selectors';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-movie-details-page',
  standalone: true,
  templateUrl: './movie-details-page.component.html',
  styleUrl: './movie-details-page.component.scss',
  imports: [RateFormatPipe, CommonModule]
})
export class MovieDetailsPageComponent implements OnInit{

  movie$: Observable<MovieDetailsApiModel | null> 

  imgPath = 'https://image.tmdb.org/t/p/w500'
  bgPath='https://image.tmdb.org/t/p/original'

  constructor(private route: ActivatedRoute, private store: Store) {
    this.movie$ = this.store.select(selectMovieDeatailsPage).pipe(
      map(movie => {
        if (movie && movie.id === +this.route.snapshot.params['id']) {
          return movie;
        }
        return null;
      })
    )
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.store.dispatch(loadMovieDetails({ id }))
  }
  
}
