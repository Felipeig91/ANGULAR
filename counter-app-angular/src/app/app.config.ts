import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

/*
  app.config.ts:
  - Configuración global de la aplicación (ApplicationConfig) para bootstrapApplication.
  - provideBrowserGlobalErrorListeners: captura errores globales del navegador y los envía al console/error handler.
  - provideZonelessChangeDetection: mejora rendimiento evitando Zone.js (necesita prácticas específicas).
  - provideRouter(routes): registra el router con las rutas definidas.
*/
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes)
  ]
};
