import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Movie, MovieApiModel } from '../models/movie.model';
import { MovieDetailsApiModel } from '../models/movie-details.model';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  sessionId: any = ''

  constructor(private httpClient: HttpClient) { }

  getParams() {
    return { params: new HttpParams().set('api_key', environment.apiKey) }
  }
  setSessionId(sessionId: string) {
    this.sessionId = sessionId
  }
  getMoviesList(listName: string): Observable<MovieApiModel> {
    return this.httpClient.get<MovieApiModel>(`${environment.apiBaseUrl}/movie/${listName}?api_key=${environment.apiKey}`)
  }

  getMovieDetailsPage(id: string): Observable<MovieDetailsApiModel> {
    return this.httpClient.get<MovieDetailsApiModel>(`${environment.apiBaseUrl}/movie/${id}`,
      this.getParams()
    )
  }

  setMovieToList(listName: string, mediaId: any, action:boolean) {
    const body = {
      media_type: 'movie',
      media_id: mediaId,
      [listName]: action
    }
    if (this.sessionId != '') {
      const params = new HttpParams().set('session_id', this.sessionId);
      const headers = new HttpHeaders({
        'accept': 'application/json',
        'content-type': 'application/json',
        'Authorization': `Bearer ${environment.readAccesToken}`
      })
     return this.httpClient.post(`${environment.apiBaseUrl}/account/${environment.accountId}/${listName}`,
        body,
        { params: params, headers: headers }
      )
    }
    return of([])
  }

  getUserMovieList(listName:string):Observable<any> {
    let params = new HttpParams()
      .set('language', 'en-US')
      .set('page', '1')
      .set('session_id', this.sessionId)
      .set('sort_by', 'created_at.asc')
    return this.httpClient.get(`${environment.apiBaseUrl}/account/${environment.accountId}/${listName}/movies?api_key=${environment.apiKey}`,
    {params})
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
