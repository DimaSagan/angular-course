import { Component } from '@angular/core';
import { nowPlayingMovies } from '../../../assets/mock-data/mock-data2';
import { PrimengMovieCardComponent } from "../../components/primeng-movie-card/primeng-movie-card.component";
import { HeaderComponent } from "../../components/header/header.component";
@Component({
    selector: 'app-now-playing',
    standalone: true,
    templateUrl: './now-playing.component.html',
    styleUrl: './now-playing.component.scss',
    imports: [PrimengMovieCardComponent, HeaderComponent]
})
export class NowPlayingComponent {
  nowPlayingMovies = nowPlayingMovies

  public favoriteListIds = new Set()
  public bookmarksListIds = new Set()

  handleAddFavorite(movie: any) {
    const set = this.favoriteListIds
    this.addOrDelMovieOfList(set, movie)
    console.log('ok')
  }
  handleAddBookmark(movie: any) {
    const set = this.bookmarksListIds
    this.addOrDelMovieOfList(set, movie)
    console.log('ok')
  }
  addOrDelMovieOfList(list:any, item:any) {
    if (list.has(item)) {
      list.delete(item)
    } else list.add(item)
  }
}
