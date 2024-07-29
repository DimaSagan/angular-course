import { createReducer, on } from '@ngrx/store';
 import * as MovieActions from './actions' 
import { initialState } from './state';
import { Movie, MovieApiModel } from "../models/movie.model";   
export const MovieReducer = createReducer(
  initialState,

 
  // Load movies by category 
  on(MovieActions.loadMoviesSuccess, (state, { movieList, movies }) => {
    return {
      ...state,
      [movieList]: movies,
    };
  }),
  
  on(MovieActions.loadMoviesFailure, (state, {movieList, error }) => {
    return {
      ...state,
      [movieList]: null,
      error: error
    };
  }),

  // Load movie details page 
  on(MovieActions.loadMovieDetailsSuccess, (state, { movie }) => {
    return {
      ...state,
      movieDetailsPage: movie
    }
  }),

  on(MovieActions.loadMoviesDetailsFailure, (state, { error }) => {
    return {
      ...state,
      movieDetailsPage: null,
      error: error
      
    }
  }),
  // load user movie-lists
  on(MovieActions.loadUserMovieListsSuccess, (state, { userListName, movies }) => {
    return {
      ...state,
      [userListName]:movies
    }
  }),
  on(MovieActions.loadUserMovieListsFailure, (state, {userListName, error }) => {
    return {
      ...state,
      [userListName]: null,
      error: error
      
    }
  })
  
)
