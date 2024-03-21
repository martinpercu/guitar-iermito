import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withPreloading(PreloadAllModules)),
    importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"victoriermito","appId":"1:120603141811:web:5d721c5704b797c0a972c6","storageBucket":"victoriermito.appspot.com","apiKey":"AIzaSyDi0aeXA_Mfl1uygE7i2sn8OBlsHJ1l2Ko","authDomain":"victoriermito.firebaseapp.com","messagingSenderId":"120603141811"}))),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore()))]
};
