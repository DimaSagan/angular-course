import { Injectable } from '@angular/core';
import { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } from '../../assets/mock-data/mock-data2';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public favoriteListIds = new Set<number>()
  public bookmarksListIds = new Set<number>()
  public favoriteList: any[] = []
  public bookmarksList:any[] = []

  allMovies: any[] = [
    ...new Set([
      ...upcomingMovies,
      ...nowPlayingMovies,
      ...topRatedMovies,
      ...popularMovies,
    ]),
  ];

  constructor() {}
  
  getNowPlayingMovies() {
    return nowPlayingMovies
  }
  getPopularMovies() {
    return popularMovies
  }
  getTopRatedMovies() {
    return topRatedMovies
  }
  getUpcomingMovies() {
    return upcomingMovies
  }
  getFavoriteListIds() {
    return this.favoriteListIds
  }
  getFavoriteList() {
    return this.favoriteList
  }
  getBookmarksListIds() {
    return this.bookmarksListIds
  }
  getBookmarksList() {
    return this.bookmarksList
  }

  getMovieById(id: string) {
    return this.allMovies.find((movieItem) => movieItem.id === parseInt(id))
  }

  setMovieToFavorites(movie: any) {
    if (!this.favoriteList.includes(movie))this.favoriteList.push(movie)
  }
  setMovieIdToFavorites(movieId: number) {
    this.favoriteListIds.add(movieId)
  }
  setMovieIdToBookmarks(movieId: number) {
    this.bookmarksListIds.add(movieId)
  }
  setMovieToBookmarks(movie: any) {
    if (!this.bookmarksListIds.has(movie.id))this.bookmarksList.push(movie)
  }
  deleteMovieOfList(list: any, movie: any) {
    const index = list.findIndex((mov: any) => mov.id === movie.id);
    if (index !== -1) {
        list.splice(index, 1);
    }
  }
  deleteIdOfList(list: Set<number>, movieId: number) {
    list.delete(movieId)
  }
}
