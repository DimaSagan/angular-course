import { createReducer, on } from '@ngrx/store';
 import * as MovieActions from './actions' 
import { initialState } from './state';
import { Movie, MovieApiModel } from "../models/movie.model";   

type MovieListType = 'now_playing' | 'upcoming' | 'top_rated' | 'popular';
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
      [movieList]: [],
      error: error
    };
  }),
  
  on(MovieActions.showMoreMoviesSuccess, (state, { movieList, movies }) => {
    return {
      ...state,
      [movieList]: [...(state[movieList] || []), ...movies],
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

  on(MovieActions.loadMovieCreditsSuccess, (state, { credits }) => {
    return {
      ...state,
      movieCast: credits.cast
    }
  }),

  on(MovieActions.LoadMovieTrailersSuccess, (state, { trailers }) => {
    return {
      ...state,
      videoLink: trailers.results[0].key
    }
  }),

  on(MovieActions.clearMovieDetails, state => ({
    ...state,
    movieDetailsPage: null,
    movieCast: null,
    videoLink: null
  })),

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
  }),
  // login 
  on(MovieActions.setUserDetailsSuccess, (state, { userDetails}) => {
    return {
      ...state,
      userDetails: userDetails,
      errorLogin: undefined
    }
  }),

  on(MovieActions.setUserDetailsFailure, (state, {errorLogin}) => {
    return {
      ...state,
      userDetails: null,
      errorLogin: errorLogin.error.status_message
    }
  }),

  // search
  on(MovieActions.searchMovieSuccess, (state, { searchResult }) => {
    return {
      ...state,
      // searchResult:null,
      searchResult:searchResult
    }
  }),

  // UserSubscription
  on(MovieActions.setUserSubscriptionSucceess, (state, {userSubscriptionDetails }) => {
    return {
      ...state,
      userSubscription:userSubscriptionDetails
    }
  }),

  // unsubscribe
  on(MovieActions.unsubscribeSucceess, (state, {unsubscribe}) => {
    return {
      ...state,
      userSubscription:unsubscribe
    }
  }),

  // ============== Firestore block

  // favorite movies db
  on(MovieActions.getFavoritesMoviesSuccees, (state, { favoriteMovies }) => {
    return {
      ...state,
      favoriteDb: favoriteMovies
    }
  }),

  //  watchlist movies db 
  on(MovieActions.getWachlistMoviesSuccees, (state, { wachlistMovies }) => {
    return {
      ...state,
      watchlistDb : wachlistMovies
   }
  }),

  // Login & check login 
  on(MovieActions.checkUserLoginSucceess, (state, { userId }) => {
    return {
      ...state,
      uidDb: userId
    }
  }),

  on(MovieActions.googleLoginInDataBaseSuccess, (state, { userId }) => {
    return {
      ...state,
      uidDb: userId
    }
  }),

  on(MovieActions.emailAndPassLoginSucceess, (state, { uid }) => {
    return {
      ...state,
      uidDb: uid
    }
  }),

  on(MovieActions.userLogOutSucceess, (state) => {
    return {
      ...state,
      uidDb : 'not login'
    }
  }),


  // ngx-device-detector
  on(MovieActions.deviceInfoSucceess, (state, { deviceInfo }) => {
    return {
      ...state,
      deviceInfo: deviceInfo
    }
  })
)
