import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../servises/auth.service';
import { PopupService } from '../servises/popup.service';
import { Store } from '@ngrx/store';
import { selectedUserDetails } from '../store/selectors';
import { map, Observable, of, switchMap, take } from 'rxjs';
import { LoaderService } from '../servises/loader.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router,
        private popupService: PopupService,
        private store: Store,
        private loaderService: LoaderService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

        return this.store.select(selectedUserDetails).pipe(
            take(1),
            switchMap(userDetails => {
                this.loaderService.hideLoader();
                if (userDetails) {
                    console.log('not null')
                    return of(true)
                } else {
                    this.popupService.showPopup(state.url)
                    console.log(state.url);
                    return of(false);
                }
            })
        )
    }
}
