import { inject } from "@angular/core"
import { ResolveFn } from "@angular/router"
import { MemoizedSelector, Store } from "@ngrx/store"
import { catchError, combineLatest, filter, map, of, switchMap, take } from "rxjs"
import { checkUserLogin, getFavoritesMovies, getWachlistMovies, loadMovies } from "../store/actions"
import { selectNowPlayingMovies, selectPopular, selectTopRated, selectUpcoming, selectUserId } from "../store/selectors"
import { Movie } from "../models/movie.model"



export const HomePageResolver: ResolveFn<any> = (route) => {
    const store = inject(Store)
    const checkAndLoadMovies = (selector: MemoizedSelector<object, Movie[]>, listName: string) => {
        store.select(selector).pipe(take(1)).subscribe(movies => {
            if (!movies.length) {
                store.dispatch(loadMovies({ listName }))
            }
        })
    }

    store.select(selectUserId).pipe(
        filter(selectUserId => selectUserId !== null),
        take(1)
    ).subscribe(id => {
        if (id) {
            store.dispatch(getFavoritesMovies({ userId: id }))
            store.dispatch(getWachlistMovies({ userId: id }))
        }
    })

    checkAndLoadMovies(selectNowPlayingMovies, 'now_playing');
    checkAndLoadMovies(selectPopular, 'popular');
    checkAndLoadMovies(selectTopRated, 'top_rated');
    checkAndLoadMovies(selectUpcoming, 'upcoming');

    return of(true)

}