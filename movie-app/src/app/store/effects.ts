import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { loadMovieDetails, loadMovieDetailsSuccess, loadMovies, loadMoviesDetailsFailure, loadMoviesFailure, loadMoviesSuccess, loadUserMovieLists, loadUserMovieListsFailure, loadUserMovieListsSuccess, searchMovie, searchMovieFailure, searchMovieSuccess, setMovieToUserList, setMovieToUserListSuccess, setUserDetails, setUserDetailsFailure, setUserDetailsSuccess, setUserSubscription, setUserSubscriptionSucceess, unsubscribe, unsubscribeSucceess } from './actions';
import { MovieService } from '../servises/movie.service';
import { Store } from '@ngrx/store';
import { AuthService } from '../servises/auth.service';
import { Router } from '@angular/router';
import { PopupService } from '../servises/popup.service';
@Injectable()
export class MovieEffects {

    constructor(
        private actions$: Actions,
        private movieService: MovieService,
        private authService: AuthService,
        private popupService: PopupService,
        private store: Store,
        private router: Router
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
                        return setMovieToUserListSuccess({ response: movie })
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

    setUserDetails$ = createEffect(() =>
        this.actions$.pipe(
            ofType(setUserDetails),
            mergeMap(({ userName, pass }) => {
                return this.authService.startSession(userName, pass).pipe(
                    map(_userDetails => {
                        this.store.dispatch(setUserDetailsSuccess({
                            userDetails: { userName: userName, password: pass }
                        }))
                        this.router.navigate([this.popupService.getReturnUrl()])
                        return { type: '[Auth] login Success' }
                    }),
                    catchError(error => {
                        this.popupService.showPopup(this.popupService.getReturnUrl())
                        return of(setUserDetailsFailure({ errorLogin: error })

                        )
                    })
                )
            })
        )
    )

    serachMovie$ = createEffect(() =>
        this.actions$.pipe(
            ofType(searchMovie),
            mergeMap(({ title }) =>
                this.movieService.getSearchMovie(title).pipe(
                    map(searchResult =>
                        searchMovieSuccess({
                            searchResult: searchResult
                        })
                    ),
                    catchError(error =>
                        of(searchMovieFailure({ error }))
                    )
                )
            )
        )
    )

    setUserSubscription$ = createEffect(() =>
        this.actions$.pipe(
            ofType(setUserSubscription),
            mergeMap(({ userName, userSurname, email, birthDate, genre }) =>
                of(
                    setUserSubscriptionSucceess({
                        userSubscriptionDetails: {
                            userName: userName,
                            userSurname: userSurname,
                            email: email,
                            birthDate: birthDate,
                            genre: genre
                        }
                    }
                    )
                )
            )
        )
    )

    unsubscribe$ = createEffect(() =>
        this.actions$.pipe(
            ofType(unsubscribe),
            mergeMap(() =>
                of(
                    unsubscribeSucceess({
                        unsubscribe: undefined
                    })
                )
            )

        )
    )

}