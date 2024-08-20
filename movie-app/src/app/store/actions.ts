import { createAction, props } from '@ngrx/store';
import { Movie, MovieApiModel } from '../models/movie.model';
import { MovieDetailsApiModel } from '../models/movie-details.model';
import { UserDetails } from '../models/user.model';
import { UserSubscription } from '../models/userSubscription.model';
// load app movie-lists 
export const loadMovies = createAction('[Movie] Load Movies',
    props<{ listName: string}>()
)

export const loadMoviesSuccess = createAction('[Movie] Load Movies Success',
    // props<{movieList: string, movies: MovieApiModel }>()
    props<{movieList: string, movies: Movie[] }>()
)

export const loadMoviesFailure = createAction('[Movie] Load Moviess Failure',
    props<{movieList: string, error: any }>()
)
// load Movie Details
export const loadMovieDetails = createAction('[Movie] Load Movie Details',
    props<{id: string}>()
)

export const loadMovieDetailsSuccess = createAction('[Movie] Load Movie Details Success',
    props<{movie: MovieDetailsApiModel | null}>()
)

export const loadMoviesDetailsFailure = createAction('[Movie] Load Movie Details Failure',
    props<{error: any}>()
)
// load user movie-lists
export const loadUserMovieLists = createAction('[Movie] Load User Movie List',
    props<{listName: string}>()
)

export const loadUserMovieListsSuccess = createAction('[Movie] Load User Movie List Success',
    props<{userListName: string, movies: []|null}>()
)

export const loadUserMovieListsFailure = createAction('[Movie] Load User Movie List Failure',
    props<{userListName: string,error: any}>()
)

// set movie to user list

export const setMovieToUserList = createAction('[Movie] Set Movie To User List',
    props<{listName: string, movieId:any, action:boolean}>()
)
export const setMovieToUserListSuccess = createAction('[Movie] Set Movie To User List Success',
    props<{response: any | null}>()
)

//  login 

export const setUserDetails = createAction('[Login] Set User Details',
    props<{userName:string, pass: string}>()
)
export const setUserDetailsSuccess = createAction('[Login] Set User Details Success',
    props<{userDetails: UserDetails}>()
)

export const setUserDetailsFailure = createAction('[Login] Set User Details Failure',
    props<{errorLogin:any}>()
)

// search

export const searchMovie = createAction('[Search] Search Movie',
    props<{title:string}>()
)
export const searchMovieSuccess = createAction('[Search] Search Movie Success',
    props<{searchResult: MovieApiModel}>()
)
export const searchMovieFailure = createAction('[Search] Search Movie Success Failure',
    props<{error:any}>()
)

// userSuscription

export const setUserSubscription = createAction('[User Subscription] Set User Subscription',
    props<{userName:string, userSurname:string, email:string, birthDate:string, genre:string}>()
)

export const setUserSubscriptionSucceess = createAction('[User Subscription] Set User Subscription Success',
    props<{userSubscriptionDetails:UserSubscription}>()
)

// usubscribe
export const unsubscribe = createAction('[User Unsubscribe] Unsubscribe')
export const unsubscribeSucceess = createAction('[User Unsubscribe] Unsubscribe Succeess',
    props<{unsubscribe:undefined}>()
)
