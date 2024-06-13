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
      rate: '8.1',
      runtime: 187
    },
    {
      imgPath: 'assets/dune.webp',
      title: 'Dune',
      description: 'A noble family becomes embroiled in a war for control over the galaxy\'s most valuable asset while its heir becomes troubled by visions of a dark future.',
      year: '2021',
      director: 'Denis Villeneuve',
      actors: 'Timothée Chalamet, Rebecca Ferguson, Oscar Isaac',
      rate: '8.2',
      runtime: 155
    },
    {
      imgPath: 'assets/severance.webp',
      title: 'Severance',
      description: 'Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives. When a mysterious colleague appears outside of work, it begins a journey to discover the truth about their jobs.',
      year: '2022',
      director: 'Dan Erickson',
      actors: '	Adam Scott, Zach Cherry, Britt Lower',
      rate: '8.7',
      seasons: 1
    },
    {
      imgPath: 'assets/fallout.webp',
      title: 'Fallout',
      description: 'In a future, post-apocalyptic Los Angeles brought about by nuclear decimation, citizens must live in underground bunkers to protect themselves from radiation, mutants and bandits.',
      year: '2024',
      director: 'Chaz Hawkins, Geneva Robertson-Dworet',
      actors: 'Ella Purnell, Aaron Moten, Walton Goggins',
      rate: '8.4',
      seasons: 1
    },
    {
      imgPath: 'assets/fallout.webp',
      title: 'Fallout',
      description: 'In a future, post-apocalyptic Los Angeles brought about by nuclear decimation, citizens must live in underground bunkers to protect themselves from radiation, mutants and bandits.',
      year: '2024',
      director: 'Chaz Hawkins, Geneva Robertson-Dworet',
      actors: 'Ella Purnell, Aaron Moten, Walton Goggins',
      rate: '8.4',
      seasons: 1
    }
  ]
  public titleMovies: string = 'recommendations'
  public titleFavorite: string = 'Favorite list'
  public titleBookmark: string = 'Bookmark'
  public favoriteListMessage: string = 'Add your favorite movies'
  public bookmarkListMessage: string = 'This is where your bookmarks will be'
  public favoriteListSet = new Set()
  public bookmarksListSet = new Set()
  handleAddFavorite(movie: any) {
    const set = this.favoriteListSet
    if (set.has(movie)) {
      set.delete(movie)
    } else set.add(movie)
  }
  handleAddBookmark(movie: any) {
    const set = this.bookmarksListSet
    if (set.has(movie)) {
      set.delete(movie)
    } else set.add(movie)
  }

}
