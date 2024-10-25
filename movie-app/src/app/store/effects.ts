import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { loadMovieDetails, loadMovieDetailsSuccess, loadMovies, loadMoviesDetailsFailure, loadMoviesFailure, loadMoviesSuccess, loadUserMovieLists, loadUserMovieListsFailure, loadUserMovieListsSuccess, setMovieToUserList, setMovieToUserListSuccess } from './actions';
import { MovieService } from '../servises/movie.service';
import { Store } from '@ngrx/store';

@Injectable()
export class MovieEffects {

    constructor(
        private actions$: Actions,
        private movieService: MovieService,
        private store: Store
    ) { }

    loadMovies$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadMovies),
            mergeMap(({ listName }) => {
                return this.movieService.getMoviesList(listName).pipe(
                    map(movies =>
                        loadMoviesSuccess({
                            movieList: listName,
                            movies: movies
                        })
                    ),
                    catchError(error =>
                        of(
                            loadMoviesFailure({
                                movieList: listName,
                                error,
                            })
                        )
                    )
                )
            })
        )
    )

    loadMoviesDetail$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadMovieDetails),
            mergeMap(({ id }) => {
                return this.movieService.getMovieDetailsPage(id).pipe(
                    map(movie =>
                        loadMovieDetailsSuccess({
                            movie: movie
                        })
                    ),
                    catchError(error =>
                        of(
                            loadMoviesDetailsFailure({
                                error
                            })
                        )
                    )
                )
            })
        )
    )

    loadUserMovieLists$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadUserMovieLists),
            mergeMap(({ listName }) => {
                return this.movieService.getUserMovieList(listName).pipe(
                    map(movie =>
                        loadUserMovieListsSuccess({
                            userListName: listName,
                            movies: movie
                        })
                    ),
                    catchError(error =>
                        of(
                            loadUserMovieListsFailure({
                                userListName: listName,
                                error
                            })
                        )
                    )
                )
            })
        )
    )

    setMovietoUserList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(setMovieToUserList),
            mergeMap(({ listName, movieId, action }) => {
                return this.movieService.setMovieToList(listName, movieId, action).pipe(
                    map(movie => {
                        this.store.dispatch(loadUserMovieLists({ listName }))
                        return setMovieToUserListSuccess({response: movie}) 
                    }
                    ),
                    catchError(error =>
                        of(
                            loadUserMovieListsFailure({
                                userListName: listName,
                                error
                            })
                        )
                    )
                )
            })
        )
    )

}