import { Component, OnInit } from '@angular/core';
import { PrimengMovieCardComponent } from '../primeng-movie-card/primeng-movie-card.component';
import { MoviesData } from '../../../assets/mock-data/mock-data';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    PrimengMovieCardComponent
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent  implements OnInit {

  moviesData = MoviesData

  public titleMovies: string = 'recommendations'
  public titleFavorite: string = 'Favorite list'
  public titleBookmark: string = 'Bookmark'
  public favoriteListMessage: string = 'Add your favorite movies'
  public bookmarkListMessage: string = 'This is where your bookmarks will be'
  public favoriteListSet = new Set()
  public bookmarksListSet = new Set()
  ngOnInit() {
    
}

  handleAddFavorite(movie: any) {
    const set = this.favoriteListSet
    this.addOrDelMovieOfList(set, movie)
  }
  handleAddBookmark(movie: any) {
    const set = this.bookmarksListSet
    this.addOrDelMovieOfList(set, movie)
  }
  addOrDelMovieOfList(list:any, item:any) {
    if (list.has(item)) {
      list.delete(item)
    } else list.add(item)
  }
}
