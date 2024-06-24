import { Component } from '@angular/core';
import { popularMovies } from '../../../assets/mock-data/mock-data2';
import { PrimengMovieCardComponent } from "../../components/primeng-movie-card/primeng-movie-card.component";
import { HeaderComponent } from "../../components/header/header.component";
@Component({
    selector: 'app-popular',
    standalone: true,
    templateUrl: './popular.component.html',
    styleUrl: './popular.component.scss',
    imports: [PrimengMovieCardComponent, HeaderComponent]
})
export class PopularComponent {
  popularMovies = popularMovies

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
