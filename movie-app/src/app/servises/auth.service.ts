import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { environment } from '../environment/environment';
import { RequestSessionId, RequestTokenResponse } from '../models/auth.model';
import { MovieService } from './movie.service';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private token: string | null = null
    private sessionId: string | null = null

    constructor(private httpClient: HttpClient, private movieService: MovieService) { }

    getOptions() {
        return { params: new HttpParams().set('api_key', environment.apiKey) }
    }

    setToken(token: string) {
        this.token = token
    }

    setSessionId(sessionId: string) {
        this.sessionId = sessionId
    }

    getSessionId(): string | null {
        return this.sessionId
    }

    getRequestToken(): Observable<RequestTokenResponse> {
        return this.httpClient.get<RequestTokenResponse>(`${environment.apiBaseUrl}/authentication/token/new`,
            this.getOptions()
        )
    }

    accountValidateWithLogin(userName: string, password: string, token: string): Observable<RequestTokenResponse> {
        const body = {
            username: userName,
            password: password,
            request_token: token
        }
        return this.httpClient.post<RequestTokenResponse>(`${environment.apiBaseUrl}/authentication/token/validate_with_login`,
            body,
            this.getOptions()
        )
    }

    createSessionId(token: string): Observable<RequestSessionId> {
        const body = {
            request_token: token
        }
        return this.httpClient.post<RequestSessionId>(`${environment.apiBaseUrl}/authentication/session/new`,
            body,
            this.getOptions()
        )
    }

    startSession(userName: string, password: string): Observable<RequestSessionId> {
        return this.getRequestToken().pipe(
            switchMap(token => this.accountValidateWithLogin(userName, password, token.request_token)),
            switchMap(response =>
                this.createSessionId(response.request_token)
            )
        ).pipe(
            tap(resp => {
                console.log(resp)
                this.movieService.setSessionId(resp.session_id)
            })
        )
    }

}
