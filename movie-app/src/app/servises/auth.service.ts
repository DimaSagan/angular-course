import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { environment } from '../environment/environment';
import { RequestSessionId, RequestTokenResponse } from '../models/auth.model';

@Injectable({
    providedIn: 'root'
})
// export class AuthService {
//     private apiUrl = 'https://api.themoviedb.org/3';
//     private apiKey = 'cf0314e5a3517d9563326a898c21a65f';

//     private username = 'dimasagan';
//     private password = 'angular24';

//     constructor(private http: HttpClient) { }

//     // Get the request token
//     private getRequestToken(): Observable<string> {
//         const url = `${this.apiUrl}/authentication/token/new?api_key=${this.apiKey}`;
//         return this.http.get<any>(url).pipe(
//             map(response => response.request_token),
//             catchError(this.handleError)
//         );
//     }

//     // Validate the request token with the user's credentials
//     private validateRequestToken(requestToken: string): Observable<void> {
//         const url = `${this.apiUrl}/authentication/token/validate_with_login?api_key=${this.apiKey}`;
//         const body = {
//             username: this.username,
//             password: this.password,
//             request_token: requestToken
//         };
//         return this.http.post<any>(url, body).pipe(
//             map(() => { }),
//             catchError(this.handleError)
//         );
//     }

//     // Create a session ID
//     private createSession(requestToken: string): Observable<string> {
//         const url = `${this.apiUrl}/authentication/session/new?api_key=${this.apiKey}`;
//         const body = { request_token: requestToken };
//         return this.http.post<any>(url, body).pipe(
//             map(response => response.session_id),
//             catchError(this.handleError)
//         );
//     }

//     // Get account details to retrieve accountId
//     private getAccountId(sessionId: string): Observable<number> {
//         const url = `${this.apiUrl}/account?api_key=${this.apiKey}&session_id=${sessionId}`;
//         return this.http.get<any>(url).pipe(
//             map(response => response.id),
//             catchError(this.handleError)
//         );
//     }

//     // Public method to get accountId
//     public authenticateAndGetAccountId(): Observable<number> {
//         return this.getRequestToken().pipe(
//             switchMap(requestToken => this.validateRequestToken(requestToken).pipe(
//                 switchMap(() => this.createSession(requestToken)),
//                 switchMap(sessionId => this.getAccountId(sessionId))
//             ))
//         );
//     }

//     private handleError(error: any) {
//         console.error('An error occurred:', error);
//         return throwError(()=>error);
//     }
// }

export class AuthService {
    private token: string | null = null
    private sessionId: string | null = null

    constructor(private httpClient: HttpClient) { }

    getOptions() {
        return { params: new HttpParams().set('api_key', environment.apiKey) }
    }
    // сохраняем токен
    setToken(token: string) {
        this.token = token
    }
    // сохраняем сешн ид
    setSessionId(sessionId: string) {
        this.sessionId = sessionId
    }
    //  запрос на сешн ид
    getSessionId(): string | null {
        return this.sessionId
    }
    // получаем токен 
    getRequestToken(): Observable<RequestTokenResponse> {
        return this.httpClient.get<RequestTokenResponse>(`${environment.apiBaseUrl}/authentication/token/new`,
            this.getOptions()
        )
    }
    // проверка авторизации 
    accountValidateWithLogin(token: string): Observable<RequestTokenResponse> {
        const body = {
            username: 'dimasagan',
            password: 'angular24',
            request_token: token
        }
        return this.httpClient.post<RequestTokenResponse>(`${environment.apiBaseUrl}/authentication/token/validate_with_login`,
            body,
            this.getOptions()
        )
    }

    // получение айди
    createSessionId(token:string): Observable<RequestSessionId> {
        const body = {
            request_token: token
        }
        return this.httpClient.post<RequestSessionId>(`${environment.apiBaseUrl}/authentication/session/new`,
            body,
            this.getOptions()
        )
    }

    startSession(): Observable<RequestSessionId> {
        return this.getRequestToken().pipe(
            switchMap(token => this.accountValidateWithLogin(token.request_token)),
            switchMap(response => this.createSessionId(response.request_token))
        )
    }
}
