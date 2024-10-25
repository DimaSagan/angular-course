import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from "./components/header/header.component";
import { LoginPopupComponent } from './components/login-popup/login-popup.component';
import { LoaderService } from './servises/loader.service';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonModule, Location } from '@angular/common';
import { ClickOutsideDirective } from './directives/clickOutsade';
import { FooterComponent } from "./components/footer/footer.component";
import { SubscribePopupComponent } from "./components/subscribe-popup/subscribe-popup.component";
import { filter, map, timer } from 'rxjs';
import { Store } from '@ngrx/store';
import { checkUserLogin, getFavoritesMovies } from './store/actions';
import { selectUserId } from './store/selectors';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        CommonModule,
        RouterOutlet,
        SidebarComponent,
        HeaderComponent,
        LoginPopupComponent,
        LoaderComponent,
        ClickOutsideDirective,
        FooterComponent,
        SubscribePopupComponent
    ]
})
export class AppComponent implements OnInit {
    loading$ = this.loaderService.loaderState
    constructor(
        private router: Router,
        private loaderService: LoaderService,
        private location: Location,
        private store: Store
    ) { }

    ngOnInit(): void {
        
        this.store.dispatch(checkUserLogin())

        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.loaderService.showLoader()
            } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
                this.loaderService.hideLoader()
            }
        })

        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.loaderService.hideLoader();
                if (event.url === '/home#recomendations') {
                    document.documentElement.classList.add('smooth-scroll')
                    timer(1000).subscribe(() => {
                        document.documentElement.classList.remove('smooth-scroll'),
                            this.location.replaceState('/home')
                    }
                    )
                } else {
                    document.documentElement.classList.remove('smooth-scroll');
                }
            }
        });

    }
}

