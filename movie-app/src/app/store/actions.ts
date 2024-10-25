import { createAction, props } from '@ngrx/store';
import { Movie, MovieApiModel } from '../models/movie.model';
import { MovieDetailsApiModel } from '../models/movie-details.model';
// load app movie-lists 
export const loadMovies = createAction('[Movie] Load Movies',
    props<{ listName: string}>()
)

export const loadMoviesSuccess = createAction('[Movie] Load Movies Success',
    props<{movieList: string, movies: MovieApiModel | null }>()
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
