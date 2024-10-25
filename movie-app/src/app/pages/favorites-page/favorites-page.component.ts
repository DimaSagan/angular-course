import { Component, OnDestroy, OnInit } from '@angular/core';
import { PrimengMovieCardComponent } from "../../components/primeng-movie-card/primeng-movie-card.component";
import { MovieService } from '../../servises/movie.service';
import { Movie } from '../../models/movie.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favorites-page',
  standalone: true,
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.scss',
  imports: [PrimengMovieCardComponent]
})
export class FavoritesPageComponent implements OnInit, OnDestroy {
  data: Movie[] = []
  private favoriteListSubscription: Subscription
  
  constructor(private movieService: MovieService) {
    this.favoriteListSubscription = new Subscription()
  }
  
  ngOnInit() {
    this.favoriteListSubscription = this.movieService.favoriteListSubject.subscribe(movies => {
      this.data = movies
      console.log('data', this.data)
    })
  }


  ngOnDestroy(): void {
    if (this.favoriteListSubscription) {
      this.favoriteListSubscription.unsubscribe()
    }
  }
}

