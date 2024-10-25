import { Directive, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Directive()
export class ClearObservable implements OnDestroy {
    destroy$: Subject<boolean> = new Subject()

    ngOnDestroy(): void {
        // console.log('ClearObservable: ngOnDestroy called')
        this.destroy$.next(true)
        this.destroy$.complete()
    }
}
