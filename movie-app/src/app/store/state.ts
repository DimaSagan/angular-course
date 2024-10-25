import { MovieDetailsApiModel } from "../models/movie-details.model";
import { Movie, MovieApiModel } from "../models/movie.model";
import { UserDetails } from "../models/user.model";
import { UserSubscription } from "../models/userSubscription.model";

export interface MovieState {
    movies: MovieApiModel | null
    now_playing: Movie[]| null
    popular: Movie[]| null
    top_rated: Movie[]| null
    upcoming: Movie[]| null
    favorite: MovieApiModel | null
    watchlist: MovieApiModel | null
    selectedMovies: Movie | null
    movieDetailsPage: MovieDetailsApiModel | null
    userDetails: UserDetails | null
    errorLogin?: string | null
    searchResult?: MovieApiModel | null
    userSubscription?: UserSubscription | null
}

export const initialState: MovieState = {
    movies: null,
    now_playing: null,
    popular: null,
    top_rated: null,
    upcoming: null,
    favorite: null,
    watchlist: null,
    selectedMovies: null,
    movieDetailsPage: null,
    userDetails: null,
    errorLogin: undefined,
    searchResult: undefined,
    userSubscription: undefined
}