import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { addMovieToFavorite, addMovieToFavoriteFailure, addMovieToFavoriteSucceess, addMovieToWachlist, addMovieToWachlistFailure, addMovieToWachlistSucceess, checkUserLogin, checkUserLoginSucceess, createNewUser, createNewUserFailure, createNewUserSuccess, emailAndPassLogin, emailAndPassLoginFailure, emailAndPassLoginSucceess, getFavoritesMovies, getFavoritesMoviesSuccees, getWachlistMovies, getWachlistMoviesSuccees, googleLoginInDataBase, googleLoginInDataBaseFailure, googleLoginInDataBaseSuccess, loadMovieCredits, loadMovieCreditsSuccess, loadMovieDetails, loadMovieDetailsSuccess, loadMovies, loadMoviesDetailsFailure, loadMoviesFailure, loadMoviesSuccess, LoadMovieTrailers, LoadMovieTrailersSuccess, loadUserMovieLists, loadUserMovieListsFailure, loadUserMovieListsSuccess, putMovieFromFavorites, putMovieFromFavoritesSucceess, putMovieFromWachlist, putMovieFromWachlistSucceess, searchMovie, searchMovieFailure, searchMovieSuccess, setMovieToUserList, setMovieToUserListSuccess, setUserDetails, setUserDetailsFailure, setUserDetailsSuccess, setUserSubscription, setUserSubscriptionSucceess, showMoreMovies, showMoreMoviesSuccess, unsubscribe, unsubscribeSucceess, userLogOut, userLogOutSucceess } from './actions';
import { MovieService } from '../servises/movie.service';
import { Store } from '@ngrx/store';
import { AuthService } from '../servises/auth.service';
import { Router } from '@angular/router';
import { PopupService } from '../servises/popup.service';
import { PlaylistFireBaseServise } from '../servises/playlist-service-fire-base.service';
import { AuthFireBase } from '../servises/autnFireBase.service';
import { Auth } from '@angular/fire/auth';
@Injectable()
export class MovieEffects {

    constructor(
        private actions$: Actions,
        private movieService: MovieService,
        private authService: AuthService,
        private dbAuthService: AuthFireBase,
        private dbServise: PlaylistFireBaseServise,
        private popupService: PopupService,
        private store: Store,
        private router: Router,
        private auth: Auth
    ) { }

    loadMovies$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadMovies),
            mergeMap(({ listName }) =>
                this.movieService.getMoviesList(listName).pipe(
                    map(movies =>
                        loadMoviesSuccess({
                            movieList: listName,
                            movies: movies.results
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
            )
        )
    )

    showMoreMovies$ = createEffect(() =>
        this.actions$.pipe(
            ofType(showMoreMovies),
            mergeMap(({ listName, pageNumber }) => {
                if (listName) {
                    return this.movieService.getMoviesList(listName, pageNumber).pipe(
                        map(movies =>
                            showMoreMoviesSuccess({
                                movieList: listName,
                                movies: movies.results
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
                } else {
                    return of(
                        loadMoviesFailure({
                            movieList: 'unknown',
                            error: 'List name is undefined',
                        })
                    )
                }
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
                        }),

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

    loadMovieCredits$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadMovieCredits),
            mergeMap(({ id }) => {
                return this.movieService.getCredits(id).pipe(
                    map(credits =>
                        loadMovieCreditsSuccess({
                            credits: credits
                        })
                    )
                )
            }
            )
        )
    )

    loadMovieTrailers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoadMovieTrailers),
            mergeMap(({ id }) => {
                return this.movieService.getMovieTrailer(id).pipe(
                    map(trailers =>
                        LoadMovieTrailersSuccess({
                            trailers: trailers
                        })
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

    // setMovietoUserList$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(setMovieToUserList),
    //         mergeMap(({ listName, movieId, action }) => {
    //             return this.movieService.setMovieToList(listName, movieId, action).pipe(
    //                 map(movie => {
    //                     this.store.dispatch(loadUserMovieLists({ listName }))
    //                     return setMovieToUserListSuccess({ response: movie })
    //                 }
    //                 ),
    //                 catchError(error =>
    //                     of(
    //                         loadUserMovieListsFailure({
    //                             userListName: listName,
    //                             error
    //                         })
    //                     )
    //                 )
    //             )
    //         })
    //     )
    // )

    // setUserDetails$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(setUserDetails),
    //         mergeMap(({ userName, pass }) => {
    //             return this.authService.startSession(userName, pass).pipe(
    //                 map(_userDetails => {
    //                     this.store.dispatch(setUserDetailsSuccess({
    //                         userDetails: { userName: userName, password: pass }
    //                     }))
    //                     this.router.navigate([this.popupService.getReturnUrl()])
    //                     return { type: '[Auth] login Success' }
    //                 }),
    //                 catchError(error => {
    //                     this.popupService.showPopup(this.popupService.getReturnUrl())
    //                     return of(setUserDetailsFailure({ errorLogin: error })

    //                     )
    //                 })
    //             )
    //         })
    //     )
    // )

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

    // ==========================  Firestore block 

    //  Favorits list 

    addMovieToFavorite$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addMovieToFavorite),
            mergeMap(({ movie }) => {
                return from(this.dbServise.setMovieToFavorites(movie)).pipe(
                    map(() => {
                        const user = this.auth.currentUser
                        if (user){
                            this.store.dispatch(getFavoritesMovies({ userId: user.uid }))
                        }
                        return addMovieToFavoriteSucceess()
                    }),
                    catchError((error) =>
                        of(
                            addMovieToFavoriteFailure({
                                error: error
                            })
                        )
                    )
                )

            }
            )
        )
    )

    getFavoritesMovies$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getFavoritesMovies),
            mergeMap(({ userId }) => {
                return from(this.dbServise.getFavoriteMovies(userId)).pipe(
                    map((movies) => {
                        return getFavoritesMoviesSuccees({
                            favoriteMovies: movies
                        })
                    })
                )
            })
        )
    )

    putMovieFromFavorites$ = createEffect(() =>
        this.actions$.pipe(
            ofType(putMovieFromFavorites),
            mergeMap(({ movie }) => {
                return from(this.dbServise.putMovieFromFavorites(movie)).pipe(
                    tap(() => {
                        const user = this.auth.currentUser
                        if (user){
                            this.store.dispatch(getFavoritesMovies({ userId: user.uid }))
                        }
                    }),
                    map(() => putMovieFromFavoritesSucceess())
                )
            })
        )
    )

    // Wathclist 

    addMovieToWachlist$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addMovieToWachlist),
            mergeMap(({ movie }) => {
                return from(this.dbServise.setMovieToWachlist(movie)).pipe(
                    map(() => {
                        const user = this.auth.currentUser
                        if (user) {
                            this.store.dispatch(getWachlistMovies({ userId: user.uid }))
                        }
                        return addMovieToWachlistSucceess()
                    }),
                    catchError((error) =>
                        of(
                            addMovieToWachlistFailure({
                                error: error
                            })
                        )
                    )
                )
            })
        )
    )

    getWachlistMovies$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getWachlistMovies),
            mergeMap(({ userId }) => {
                return from(this.dbServise.getWachlist(userId)).pipe(
                    map((movies) => {
                        return getWachlistMoviesSuccees({
                            wachlistMovies: movies
                        })
                    })
                )
            })
        )
    )

   

    putMovieFromWachlist$ = createEffect(() =>
        this.actions$.pipe(
            ofType(putMovieFromWachlist),
            mergeMap(({ movie }) => {
                return from(this.dbServise.putMovieFromWachlist(movie)).pipe(
                    tap(() => {
                        const user = this.auth.currentUser
                        if (user) {
                            this.store.dispatch(getWachlistMovies({ userId: user.uid }))
                        }
                    }),
                    map(() => putMovieFromWachlistSucceess())
                )
            })
        )
    )
    // check login 
    checkUserLogin$ = createEffect(() =>
        this.actions$.pipe(
            ofType(checkUserLogin),
            mergeMap(() => {
                return from(this.dbAuthService.checkUser()).pipe(
                    map((userData) => {
                        return checkUserLoginSucceess({
                            userId: userData
                        })
                    })
                )
            })
        )
    )

    // Google Login 

    googleLoginInDataBase$ = createEffect(() =>
        this.actions$.pipe(
            ofType(googleLoginInDataBase),
            mergeMap(() => {
                return from(this.dbAuthService.googleSignIn()).pipe(
                    switchMap(userData => {
                        this.store.dispatch(googleLoginInDataBaseSuccess({
                            userId: userData
                        }))
                        this.router.navigate([this.popupService.getReturnUrl()])
                        return of({ type: '[Auth] login Success' })
                    }),
                    catchError(error => {
                        this.popupService.showPopup(this.popupService.getReturnUrl())
                        return of(
                            googleLoginInDataBaseFailure({
                                loginError: error
                            })
                        )

                    })
                )
            })
        )
    )

    // Email & Pass SignIn

    createNewUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(createNewUser),
            mergeMap(({ userName, email, password }) => {
                return from(this.dbAuthService.createNewUser(userName, email, password)).pipe(
                    map(() => {
                        return createNewUserSuccess()
                    }),
                    catchError((error) =>
                        of(
                            createNewUserFailure({
                                error: error
                            })
                        )
                    )
                )
            })
        )
    )

    emailAndPassLogin$ = createEffect(() =>
        this.actions$.pipe(
            ofType(emailAndPassLogin),
            mergeMap(({ email, password }) => {
                return from(this.dbAuthService.emailSignIn(email, password)).pipe(
                    map((uid) => {
                        this.store.dispatch(emailAndPassLoginSucceess({
                            uid: uid.user.uid
                        }))
                        this.router.navigate([this.popupService.getReturnUrl()])
                        return { type: '[Auth] login Success' }
                    }),
                    catchError(error => {

                        this.popupService.showPopup(this.popupService.getReturnUrl())
                        return of(
                            emailAndPassLoginFailure({
                                error: error
                            })
                        )
                    })
                )

            })
        )
    )

    // logOut

    userLogOut$ = createEffect(() =>
        this.actions$.pipe(
            ofType(userLogOut),
            mergeMap(() => {
                return from(this.dbAuthService.logout()).pipe(
                    map(() => {
                        return userLogOutSucceess()
                    })
                )
            })
        )
    )

}