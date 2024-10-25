import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../servises/auth.service';
import { PopupService } from '../servises/popup.service';
import { Store } from '@ngrx/store';
import { selectedUserDetails, selectUserId } from '../store/selectors';
import { filter, map, Observable, of, switchMap, take } from 'rxjs';
import { LoaderService } from '../servises/loader.service';
import { AuthFireBase } from '../servises/autnFireBase.service';
import { checkUserLogin } from '../store/actions';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router,
        private popupService: PopupService,
        private store: Store,
        private loaderService: LoaderService,
        private authDb: AuthFireBase
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        if (state.url === '/favorite' || state.url === '/watchlist') {
            this.store.dispatch(checkUserLogin())
        }
        return this.store.select(selectUserId).pipe(
            take(1),
            switchMap(userDetails => {
                this.loaderService.hideLoader();
                if (userDetails !== 'not login') {
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
