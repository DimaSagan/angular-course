import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { importProvidersFrom, isDevMode } from '@angular/core';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { MovieReducer } from './store/reducer';
import { MovieEffects } from './store/effects';
// import { LoaderService } from './servises/loader.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule),
    provideHttpClient(),
    provideStore({movie: MovieReducer}),
    provideEffects([MovieEffects]),
    // LoaderService,
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
