import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PopupService {
   popupVisibleSubject = new BehaviorSubject<boolean>(false)
    private returnUrl: string = ''

    showPopup(returnUrl: string): void {
        this.returnUrl = returnUrl;
        this.popupVisibleSubject.next(true)
    }

    hidePopup(): void {
        this.popupVisibleSubject.next(false)
    }

    getPopupVisibility(): Observable<boolean> {
        return this.popupVisibleSubject.asObservable()
    }

    getReturnUrl(): string {
        return this.returnUrl;
    }
}