import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { importProvidersFrom, isDevMode } from '@angular/core';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { MovieReducer } from './store/reducer';
import { MovieEffects } from './store/effects';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore'; 
import { firebaseConfig } from './environment/environment';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',  
      anchorScrolling: 'enabled' 
      })
      
    ),
    importProvidersFrom(BrowserAnimationsModule),
    provideHttpClient(),
    provideStore({movie: MovieReducer}),
    provideEffects([MovieEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()) 
]
};
