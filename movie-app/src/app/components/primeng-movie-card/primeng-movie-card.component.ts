import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TimeFormatPipe } from '../../pipes/time-format/time-format.pipe';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RateFormatPipe } from "../../pipes/rate-format/rate-format.pipe";
import { MovieService } from '../../servises/movie.service';
import { Movie } from '../../models/movie.model';
@Component({
  selector: 'app-primeng-movie-card',
  standalone: true,
  templateUrl: './primeng-movie-card.component.html',
  styleUrl: './primeng-movie-card.component.scss',
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    TimeFormatPipe,
    RouterModule,
    RateFormatPipe
  ]
})
export class PrimengMovieCardComponent implements OnInit {
  @Input() mov: any
  public buttonSwich: boolean = false
  favoriteIsActive: boolean = false;
  bookmarkIsActive: boolean = false;
  constructor(private router: ActivatedRoute, private movieService: MovieService) { }
  ngOnInit(): void {
    const favoriteListIds = this.movieService.getFavoriteListIds()
    const bookmarkListIds = this.movieService.getBookmarksListIds()
    const movieId: number = this.mov.id
    this.favoriteIsActive = favoriteListIds.has(movieId)
    this.bookmarkIsActive = bookmarkListIds.has(movieId)
    if (this.router.snapshot.routeConfig?.path === 'favorite' || this.router.snapshot.routeConfig?.path === 'bookmark') this.buttonSwich = true
  }

  addMovieToFavorite(mov: Movie) {
    if (!this.favoriteIsActive) {
      this.movieService.setMovieToFavorites(mov)
      this.movieService.setMovieIdToFavorites(mov.id)
    } else {
      this.movieService.deleteMovieOfList(this.movieService.getFavoriteList(), mov)
      this.movieService.deleteIdOfList(this.movieService.getFavoriteListIds(),mov.id)
     
    }
    this.favoriteIsActive = !this.favoriteIsActive
  }
  addMovieToBookmarks(mov: any) {
    if(!this.bookmarkIsActive){
      this.movieService.setMovieToBookmarks(mov)
      this.movieService.setMovieIdToBookmarks(mov.id)
    } else {
      this.movieService.deleteMovieOfList(this.movieService.getBookmarksList(), mov)
      this.movieService.deleteIdOfList(this.movieService.getBookmarksListIds(),mov.id)
    }
    this.bookmarkIsActive = !this.bookmarkIsActive
  }


  deleteMovieFromlist(mov: any) {
    let movieList: any
    let idsList: any
    this.router.snapshot.routeConfig?.path === 'favorite' ? movieList = this.movieService.getFavoriteList() : movieList = this.movieService.getBookmarksList()
    this.router.snapshot.routeConfig?.path === 'favorite' ? idsList = this.movieService.getFavoriteListIds() :  idsList = this.movieService.getBookmarksListIds()
    
    this.movieService.deleteMovieOfList(movieList, mov)
      this.movieService.deleteIdOfList(idsList,mov.id)
  }
  deleteIdFromList(mov: any) {
    // this.deleteId.emit(mov)
  }
}
