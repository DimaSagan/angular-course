import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Store } from "@ngrx/store";
import { loadMovieDetails, loadMovies } from "../store/actions";
import { filter, map, Observable, take } from "rxjs";
import { Movie } from "../models/movie.model";
import { selectMovieDeatailsPage } from "../store/selectors";
import { MovieDetailsApiModel } from "../models/movie-details.model";

@Injectable({
    providedIn: 'root'
})

export class MovieResolver implements Resolve<any> {

    constructor(private httpClient: HttpClient, private store: Store) { }

    resolve(route: ActivatedRouteSnapshot): any{
    const id = route.params['id']   
      let test =   this.store.dispatch(loadMovieDetails({ id: `${id}` }))
        return true
    }
}