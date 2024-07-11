import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Movie, MovieApiModel, MovieApiModelWithDate } from '../models/movie.model';
import { MovieDetailsApiModel } from '../models/movie-details.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  public favoriteListIds = new Set<number>()
  public bookmarksListIds = new Set<number>()
  public favoriteList: any[] = []
  public bookmarksList: any[] = []
  public favoriteListSubject = new BehaviorSubject<Movie[]>(this.favoriteList)
  public bookmarksListSubject = new BehaviorSubject<Movie[]>(this.bookmarksList)

  apiKey: string = '?api_key=cf0314e5a3517d9563326a898c21a65f'
  apiToken: string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjAzMTRlNWEzNTE3ZDk1NjMzMjZhODk4YzIxYTY1ZiIsIm5iZiI6MTcyMDAxMzI5Mi43MTAxMDcsInN1YiI6IjY2ODU0ZWMwYzZkMzM5ZTM4MTFiY2Q3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hHWpf0A8TNT6IQmhE1Qr25W3U5z5n-m3eBM0OiqGNXE'
  baseUrl: string = 'https://api.themoviedb.org/3/movie'


  constructor(private httpClient: HttpClient) { }



  getNowPlayingMovies(): Observable<MovieApiModelWithDate> {
    return this.httpClient.get<MovieApiModelWithDate>(`${this.baseUrl}/now_playing${this.apiKey}&page=2`)
  }

  getPopularMovies(): Observable<MovieApiModel> {
    return this.httpClient.get<MovieApiModel>(`${this.baseUrl}/popular${this.apiKey}`)
  }
  getTopRatedMovies(): Observable<MovieApiModel> {
    return this.httpClient.get<MovieApiModel>(`${this.baseUrl}/top_rated${this.apiKey}`)
  }
  getUpcomingMovies(): Observable<MovieApiModelWithDate> {
    return this.httpClient.get<MovieApiModelWithDate>(`${this.baseUrl}/upcoming${this.apiKey}`)
  }
  getMovieById(id: string): Observable<MovieDetailsApiModel> {
    return this.httpClient.get<MovieDetailsApiModel>(`${this.baseUrl}/${id}${this.apiKey}`)
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

  setMovieToFavorites(movie: Movie) {
    if (!this.favoriteList.includes(movie)) { this.favoriteList.push(movie) }
    this.favoriteListSubject.next(this.favoriteList)
  }
  setMovieIdToFavorites(movieId: number) {
    this.favoriteListIds.add(movieId)
  }
  setMovieIdToBookmarks(movieId: number) {
    this.bookmarksListIds.add(movieId)
  }
  setMovieToBookmarks(movie: any) {
    if (!this.bookmarksListIds.has(movie.id)) this.bookmarksList.push(movie)
    this.bookmarksListSubject.next(this.bookmarksList)
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
