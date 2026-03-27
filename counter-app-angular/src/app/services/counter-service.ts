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
  // Valor actual del contador, mantenido en estado privado.
  private count = 0;

  // Devuelve el valor actual del contador.
  // - Se llama desde componentes para obtener la vista actual del valor.
  getCount(): number {
    return this.count;
  }

  // Incrementa el contador en 1.
  // - Lógica de negocio centralizada aquí para desacoplar la vista.
  increment(): void {
    this.count++;
  }

  // Decrementa el contador en 1.
  // - Se usa al presionar el botón "-" en el componente.
  decrement(): void {
    this.count--;
  }

  // Restaura el contador a 0.
  // - Mantiene consistencia y simplifica la operación de reset.
  reset(): void {
    this.count = 0;
  }
}
