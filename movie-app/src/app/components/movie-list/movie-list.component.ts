import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  moviesData = [
    {
      imgPath: 'assets/oppenheimer.webp',
      title: 'Oppenheimer',
      description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
      year: '2023',
      director: 'Christopher Nolan',
      actors: 'Cillian Murphy, Emily Blunt, Matt Damon',
      rate: '8.3',
   }
  ]
  titleFavorite: string = 'Favorite list' 
  titleBookmark:string = 'Bookmark'
  handleAddFavorite(movie: any) {
    console.log('handleAddFavorite', movie.title);
    let fav = document.querySelector('.favorite__item') as HTMLElement
    if (fav.innerText == movie.title) {
      fav.innerText = ""
    }else fav.innerText = movie.title
  }
  handleAddBookmark(movie: any) {
    console.log('handleAddFavorite', movie.title);
    let fav = document.querySelector('.bookmarks__item') as HTMLElement
    if (fav.innerText == movie.title) {
      fav.innerText = ""
    }else fav.innerText = movie.title
  }
}
