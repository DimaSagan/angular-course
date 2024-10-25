import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoPopupService {

  popupVisibleSubdject$ = new BehaviorSubject<boolean>(false)

  show() {
    this.popupVisibleSubdject$.next(true)
  }
  hide() {
    this.popupVisibleSubdject$.next(false)
  }
  getPopupStatus(): Observable<boolean> {
   return this.popupVisibleSubdject$.asObservable()
  }
}
