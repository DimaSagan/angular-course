import { inject, Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, ResolveFn } from "@angular/router";
import { Store } from "@ngrx/store";
import { clearMovieDetails, loadMovieCredits, loadMovieDetails, LoadMovieTrailers } from "../store/actions";
import { selectMovieCast, selectMovieDeatailsPage, selectVideoLink } from "../store/selectors";
import { combineLatest, delay, EMPTY, filter, of, switchMap, take } from "rxjs";

export const MovieResolver: ResolveFn<any> = (route) => {
    const store = inject(Store)
    const movieId = Number(route.paramMap.get('id'))
    
    if (movieId) {
        store.dispatch(clearMovieDetails()) 
        store.dispatch(loadMovieDetails({ id: `${movieId}` })) 
        store.dispatch(loadMovieCredits({ id: `${movieId}` }))
        store.dispatch(LoadMovieTrailers({id: `${movieId}`}))
        // return combineLatest([
        //     store.select(selectMovieDeatailsPage).pipe(filter(movieDetails => !!movieDetails), take(1)),
        //     store.select(selectMovieCast).pipe(filter(movieCast => !!movieCast)),
        //     store.select(selectVideoLink).pipe(filter(link=>!!link))
        // ])

        return true
    }
    return null
}