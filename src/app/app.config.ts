// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
// Auth & Functions brauchst du aktuell nicht aus Angular heraus,
// deshalb lasse ich sie hier weg – weniger Fehlerquellen.

import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),

    // Firebase App mit deinem Projekt initialisieren
    provideFirebaseApp(() => initializeApp(environment.firebase)),

    // 🔥 Direkt echte Firestore-Instanz, KEIN Emulator!
    provideFirestore(() => getFirestore()),
  ],
};
