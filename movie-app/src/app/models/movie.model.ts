export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MovieApiModel {
    page: number,
    results: Movie[]
}
interface Dates {
    maximum: string;
    minimum: string;
}
export interface MovieApiModelWithDate extends MovieApiModel {
    dates: Dates
}