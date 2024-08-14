import { Routes } from '@angular/router';
import { MovieResolver } from './guards/movie.resolver';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'now-playing', pathMatch: 'full' },
    {path: 'now-playing', loadComponent:()=> import('./pages/now-playing/now-playing.component').then(m=>m.NowPlayingComponent)},
    {path: 'popular', loadComponent:()=> import('./pages/popular/popular.component').then(m=>m.PopularComponent)},
    {path: 'top-rate', loadComponent:()=> import('./pages/top-rate/top-rate.component').then(m=>m.TopRateComponent)},
    {path: 'upcoming', loadComponent:()=> import('./pages/upcoming/upcoming.component').then(m=>m.UpcomingComponent)},
    {path: 'movie/:id', loadComponent:()=>import('./pages/movie-details-page/movie-details-page.component').then(m=>m.MovieDetailsPageComponent),resolve: { data: MovieResolver } },
    {path: 'favorite', loadComponent:()=>import('./pages/favorites-page/favorites-page.component').then(m=>m.FavoritesPageComponent), canActivate: [AuthGuard]},
    {path: 'watchlist', loadComponent:()=>import('./pages/bookmarks-page/bookmarks-page.component').then(m=>m.BookmarksPageComponent), canActivate: [AuthGuard]},
    {path: 'search', loadComponent:()=>import('./pages/search-page/search-page.component').then(m=>m.SearchPageComponent)}
];
