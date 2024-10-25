import { MovieDetailsApiModel } from "../models/movie-details.model";
import { Movie, MovieApiModel } from "../models/movie.model";

export interface MovieState {
    movies: MovieApiModel | null
    now_playing: MovieApiModel | null
    popular: MovieApiModel | null
    top_rated: MovieApiModel | null
    upcoming: MovieApiModel | null
    favorite: MovieApiModel | null
    watchlist: MovieApiModel | null
    selectedMovies: Movie | null
    movieDetailsPage: MovieDetailsApiModel|null
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
    movieDetailsPage: null

}