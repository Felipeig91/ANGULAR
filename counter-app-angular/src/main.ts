import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

/*
  main.ts:
  - Punto de entrada de la aplicación.
  - bootstrapApplication(App, appConfig) inicializa Angular sin AppModule.
  - appConfig se utiliza para registrar providers globales (routing, errores, cambio zoneless).
  - Capturamos errores de arranque para facilitar debugging en despliegues.
*/
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
