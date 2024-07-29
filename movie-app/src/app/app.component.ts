import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from "./components/header/header.component";
import { MovieService } from './servises/movie.service';
import { from, Observable, of, Subscription } from 'rxjs';
import { AuthService } from './servises/auth.service';
import { HttpParams } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { loadUserMovieLists } from './store/actions';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        RouterOutlet,
        SidebarComponent,
        HeaderComponent
    ]
})
export class AppComponent implements OnInit {
    title = 'angular_course';

    constructor(private movieService: MovieService, private authService: AuthService, private store: Store) { }

    ngOnInit(): void {
        this.authService.startSession().subscribe(response => {
            this.movieService.setSessionId(response.session_id)
            this.store.dispatch(loadUserMovieLists({ listName: 'favorite' }))
            this.store.dispatch(loadUserMovieLists({ listName: 'watchlist' }))
       })       
    }
}

