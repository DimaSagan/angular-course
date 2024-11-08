import { createAction, props } from '@ngrx/store';
import { Movie, MovieApiModel } from '../models/movie.model';
import { MovieDetailsApiModel } from '../models/movie-details.model';
import { UserDetails } from '../models/user.model';
import { UserSubscription } from '../models/userSubscription.model';
import { CreditsModel } from '../models/credits.model';
import { MovieTrailerModel } from '../models/movie-trailer.model';
import { DeviceInfo } from 'ngx-device-detector';

type MovieListType = 'now_playing' | 'upcoming' | 'top_rated' | 'popular';
// load app movie-lists 
export const loadMovies = createAction('[Movie] Load Movies',
    props<{ listName: string}>()
)

export const loadMoviesSuccess = createAction('[Movie] Load Movies Success',
    props<{movieList: string, movies: Movie[] }>()
)

export const loadMoviesFailure = createAction('[Movie] Load Moviess Failure',
    props<{movieList: string, error: any }>()
)

export const showMoreMovies = createAction('[Movie] Show More Movies',
    props<{listName: MovieListType, pageNumber: number}>()
)
export const showMoreMoviesSuccess = createAction('[Movie] Show More Movies Success',
    props<{movieList: MovieListType, movies: Movie[] }>()
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

export const clearMovieDetails = createAction('[Movie Details] Clear');

export const loadMovieCredits = createAction('[]Movie] Load Movie Credits',
    props<{id:string}>()
)
export const loadMovieCreditsSuccess = createAction('[]Movie] Load Movie Credits Success',
    props<{credits:CreditsModel}>()
)

export const LoadMovieTrailers = createAction('[Movie] Load Movie Trailers',
    props<{id:string}>()
)

export const LoadMovieTrailersSuccess = createAction('[Movie] Load Movie Trailers Success',
    props<{trailers: MovieTrailerModel}>()
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

//  ===== Firebase block

// add and get movie to favorites in database

export const addMovieToFavorite = createAction('[DB] Add Movie To Favorite',
    props<{movie:Movie}>()
)
export const addMovieToFavoriteSucceess = createAction('[DB] Add Movie To Favorite Succeess')

export const addMovieToFavoriteFailure = createAction('[DB] Add Movie To Favorite Failure',
    props<{error:any}>()
)

export const getFavoritesMovies = createAction('[DB] Get Favorites Movies',
    props<{userId:string}>()
)

export const getFavoritesMoviesSuccees = createAction('[DB] Get Favorites Movies Succeess',
    props<{ favoriteMovies: Movie[] }>()
)

export const putMovieFromFavorites = createAction('[DB] Put Movie From Favorites',
    props<{movie:Movie}>()
)
export const putMovieFromFavoritesSucceess = createAction('[DB] Put Movie From Favorites Succeess',)

// add and get movie to wachlist in database

export const addMovieToWachlist = createAction('[DB] Add Movie To Wachlist',
    props<{movie:Movie}>()
)
export const addMovieToWachlistSucceess = createAction('[DB] Add Movie To Wachlist Succeess')

export const addMovieToWachlistFailure = createAction('[DB] Add Movie To Wachlist Failure',
    props<{error:any}>()
)

export const getWachlistMovies = createAction('[DB] Get Wachlist Movies',
    props<{userId:string}>()
)

export const getWachlistMoviesSuccees = createAction('[DB] Get Wachlist Movies Succeess',
    props<{ wachlistMovies: Movie[] }>()
)

export const putMovieFromWachlist = createAction('[DB] Put Movie From Wachlist',
    props<{movie:Movie}>()
)
export const putMovieFromWachlistSucceess = createAction('[DB] Put Movie From Wachlist Succeess',)


// login in database

// check login
export const checkUserLogin = createAction('[Login Db] Check User Login')

export const checkUserLoginSucceess = createAction('[Login Db] Check User Login Succeess',
    props<{userId:string|null}>()
)

// google
export const googleLoginInDataBase = createAction('[Login DB] Google Login In Data Base')

export const googleLoginInDataBaseSuccess = createAction('[Login DB] Google Login In Data Base Succeess',
    props<{userId:string}>()
)

export const googleLoginInDataBaseFailure = createAction('[Login DB] Google Login In Data Base Failure',
    props<{ loginError: any }>()
)

// email & pass
//   - create user 
export const createNewUser = createAction('[login DB] Create New User',
    props<{userName:string, email:string, password:string}>()
) 

export const createNewUserSuccess = createAction('[login DB] Create New User Succeess')

export const createNewUserFailure = createAction('[login DB] Create New User Failure',
    props<{error:any}>()
)

//   - login with email & password 
export const emailAndPassLogin = createAction('[login DB] Email And Password Login',
    props<{email:string, password:string}>()
) 

export const emailAndPassLoginSucceess = createAction('[login DB] Email And Password Login Succeess',
    props<{uid:string}>()
) 

export const emailAndPassLoginFailure = createAction('[login DB] Email And Password Login Failure',
    props<{error:any}>()
)

// logOut

export const userLogOut = createAction('[login DB] User Log Out')

export const userLogOutSucceess = createAction('[login DB] User Log Out Succeess')




// ========= ngx-device-detector


export const deviceInfo = createAction('[Device Info] Device Info Start')

export const deviceInfoSucceess = createAction('[Device Info] Device Info Succeess',
    props<{deviceInfo: DeviceInfo}>()
)

export const deviceInfoFailure = createAction('[Device Info] Device Info Failure',
    props<{error:any}>()
)
