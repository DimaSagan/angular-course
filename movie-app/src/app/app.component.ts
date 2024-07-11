import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from "./components/header/header.component";
import { MovieService } from './servises/movie.service';
import { from, Observable, of, Subscription } from 'rxjs';

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

    constructor(private movieService: MovieService) { }

    

    ngOnInit(): void {
       

    }


}

