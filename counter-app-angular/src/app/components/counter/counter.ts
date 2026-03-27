import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { CounterService } from '../../services/counter-service';

/*
  Este componente es standalone (Angular v14+). Se usa standalone para simplificar
  la estructura de módulos y registrar dependencias de forma local.
  "imports" aquí incluye módulos composables:
    - CommonModule: directivas base como ngIf/ngFor.
    - FontAwesomeModule: iconos de FontAwesome para UI.

  Esto evita crear un NgModule explícito cuando hay pocos componentes,
  facilitando el test y el reuso. */
@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './counter.html',
  styleUrls: ['./counter.scss'],
})

// Clase Counter (componente)
// - Encapsula la lógica del contador en métodos, manteniendo la UI en template.
// - Usa CounterService para mantener un único estado (single source of truth).
export class Counter {
  // Icono de Angular para ilustración visual en el título.
  faAngular = faAngular;

  constructor(private counterService: CounterService) {
    // Inyección de dependencias: CounterService se inyecta y se usa en métodos.
  }

  /**
   * Getter "count".
   * - Devuelve el valor actual del contador desde el servicio.
   * - Permite binding en template: {{ count }}.
   */
  get count(): number {
    return this.counterService.getCount();
  }

  /**
   * increment():
   * - Llama al servicio para aumentar el contador en 1.
   * - Se invoca con el botón "+".
   */
  increment(): void {
    this.counterService.increment();
  }

  /**
   * decrement():
   * - Llama al servicio para disminuir el contador en 1.
   * - Se invoca con el botón "-".
   */
  decrement(): void {
    this.counterService.decrement();
  }

  /**
   * reset():
   * - Resetea el contador a 0 en el servicio.
   * - Se invoca con el botón "Reset".
   */
  reset(): void {
    this.counterService.reset();
  }
}
