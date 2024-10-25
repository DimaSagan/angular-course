import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { Store } from '@ngrx/store';
import { ClearObservable } from '../../directives/clear-observable';
import { map, Observable, take, takeUntil } from 'rxjs';
import { selectPopular } from '../../store/selectors';
import { SortBarComponent } from "../../components/sort-bar/sort-bar.component";
import { MovieListComponent } from "../../components/movie-list/movie-list.component";
import { CommonModule } from '@angular/common';
import { AuthFireBase } from '../../servises/autnFireBase.service';
import { PlaylistFireBaseServise } from '../../servises/playlist-service-fire-base.service';
@Component({
  selector: 'app-popular',
  standalone: true,
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss',
  imports: [MovieListComponent, CommonModule]
})
export class PopularComponent extends ClearObservable implements OnInit {

  moviesResult$: Observable<Movie[]>

  constructor(
    private store: Store,
    ) {
  
    super()

    this.moviesResult$ = this.store.select(selectPopular).pipe(
      takeUntil(this.destroy$)
    )
  }

  ngOnInit(): void {
    // this.googleTestAuth.checkUser()
  }

  
  
}
