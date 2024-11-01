import { Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MovieResolver } from './guards/movie.resolver';
import { AuthGuard } from './guards/auth.guard';
import { HomePageResolver } from './guards/home-page.resolver';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', resolve:{data: HomePageResolver}, loadComponent:()=>import('./pages/home-page/home-page.component').then(m=>m.HomePageComponent)},
    {path: 'now_playing', loadComponent:()=> import('./pages/now-playing/now-playing.component').then(m=>m.NowPlayingComponent)},
    {path: 'popular', loadComponent:()=> import('./pages/popular/popular.component').then(m=>m.PopularComponent)},
    {path: 'top_rated', loadComponent:()=> import('./pages/top-rate/top-rate.component').then(m=>m.TopRateComponent)},
    {path: 'upcoming', loadComponent:()=> import('./pages/upcoming/upcoming.component').then(m=>m.UpcomingComponent)},
    {path: 'movie/:id', resolve: { data: MovieResolver }, loadComponent:()=>import('./pages/movie-details-page/movie-details-page.component').then(m=>m.MovieDetailsPageComponent)},
    {path: 'favorite', loadComponent:()=>import('./pages/favorites-page/favorites-page.component').then(m=>m.FavoritesPageComponent), canActivate: [AuthGuard]},
    // {path: 'favorite', loadComponent:()=>import('./pages/favorites-page/favorites-page.component').then(m=>m.FavoritesPageComponent)},

    {path: 'watchlist', loadComponent:()=>import('./pages/bookmarks-page/bookmarks-page.component').then(m=>m.BookmarksPageComponent), canActivate: [AuthGuard]},
    // {path: 'watchlist', loadComponent:()=>import('./pages/bookmarks-page/bookmarks-page.component').then(m=>m.BookmarksPageComponent)},

    {path: 'search', loadComponent:()=>import('./pages/search-page/search-page.component').then(m=>m.SearchPageComponent)}
];
