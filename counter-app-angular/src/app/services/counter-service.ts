import { Injectable } from '@angular/core';

/*
  CounterService:
  - Servicio singleton inyectable en toda la aplicación.
  - "providedIn: 'root'" significa que Angular crea una única instancia global.
  - Provee toda la lógica de negocio del contador (estado, incremento, decremento).
  - Permite separar UI (componentes) de estado y comportamientos reutilizables.
*/
@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private count = 0;

  getCount(): number {
    return this.count;
  }

  increment(): void {
    this.count++;
  }

  decrement(): void {
    this.count--;
  }

  reset(): void {
    this.count = 0;
  }
}
