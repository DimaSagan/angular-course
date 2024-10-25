import { Component } from '@angular/core';
import { topRatedMovies } from '../../../assets/mock-data/mock-data2';
import { PrimengMovieCardComponent } from "../../components/primeng-movie-card/primeng-movie-card.component";
import { HeaderComponent } from "../../components/header/header.component";
@Component({
    selector: 'app-top-rate',
    standalone: true,
    templateUrl: './top-rate.component.html',
    styleUrl: './top-rate.component.scss',
    imports: [PrimengMovieCardComponent, HeaderComponent]
})
export class TopRateComponent {
  topRatedMovies = topRatedMovies

  public favoriteListIds = new Set()
  public bookmarksListIds = new Set()

  handleAddFavorite(movie: any) {
    const set = this.favoriteListIds
    this.addOrDelMovieOfList(set, movie)
  }
  handleAddBookmark(movie: any) {
    const set = this.bookmarksListIds
    this.addOrDelMovieOfList(set, movie)
  }
  addOrDelMovieOfList(list:any, item:any) {
    if (list.has(item)) {
      list.delete(item)
    } else list.add(item)
  }
}
