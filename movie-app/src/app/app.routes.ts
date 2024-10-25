import { Routes } from '@angular/router';
import { MovieDetailsPageComponent } from './pages/movie-details-page/movie-details-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { BookmarksPageComponent } from './pages/bookmarks-page/bookmarks-page.component';
import { NowPlayingComponent } from './pages/now-playing/now-playing.component';
import { PopularComponent } from './pages/popular/popular.component';
import { TopRateComponent } from './pages/top-rate/top-rate.component';
import { UpcomingComponent } from './pages/upcoming/upcoming.component';

export const routes: Routes = [
    { path: '', redirectTo: 'now-playing', pathMatch: 'full'},
    { path: 'now-playing', component: NowPlayingComponent },
    { path: 'popular', component: PopularComponent},
    { path: 'top-rate', component: TopRateComponent },
    { path:'upcoming', component: UpcomingComponent},
    { path: 'movie/:id', component: MovieDetailsPageComponent },
    { path: 'favorite', component: FavoritesPageComponent, outlet: 'outlet2'},
    { path: 'bookmark', component: BookmarksPageComponent, outlet: 'outlet2'}
];
