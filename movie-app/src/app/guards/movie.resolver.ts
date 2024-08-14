import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Store } from "@ngrx/store";
import { loadMovieDetails} from "../store/actions";


@Injectable({
    providedIn: 'root'
})

export class MovieResolver implements Resolve<any> {

    constructor(private store: Store) { }

    resolve(route: ActivatedRouteSnapshot): any{
    const id = route.params['id']   
    this.store.dispatch(loadMovieDetails({ id: `${id}` }))
        return true
    }
}