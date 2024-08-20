import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MovieState } from "./state";

export const selectState = createFeatureSelector<MovieState>('movie')

export const selectNowPlayingMovies = createSelector(selectState, state => state.now_playing??[])

export const selectPopular = createSelector(selectState, state => state.popular??[])

export const selectTopRated = createSelector(selectState, state => state.top_rated??[])

export const selectUpcoming = createSelector(selectState, state => state.upcoming??[])

export const selectFavorite = createSelector(selectState, state => state.favorite)

export const selectWatchlist = createSelector(selectState, state => state.watchlist)

export const selectFavoriteMoviesIds = createSelector(selectState, state => state.favorite?.results.map(movie => movie.id) || [])

export const selectWatchlistIds = createSelector(selectState, state=> state.watchlist?.results.map(movie=> movie.id)||[])

export const selectMovieDeatailsPage = createSelector(selectState, state => state.movieDetailsPage)

export const selectedUserDetails = createSelector(selectState, state => state.userDetails)

export const selectedLoginFailure = createSelector(selectState, state => state.errorLogin)

export const selectedSearchResult = createSelector(selectState, state => state.searchResult)

export const selectedUserSubscription = createSelector(selectState, state => state.userSubscription)