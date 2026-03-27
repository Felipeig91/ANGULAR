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

// Esta clase gestiona la lógica del contador y delega almacenamiento a CounterService.
export class Counter {
  faAngular = faAngular;

  constructor(private counterService: CounterService) {}

  get count(): number {
    return this.counterService.getCount();
  }

  increment(): void {
    this.counterService.increment();
  }

  decrement(): void {
    this.counterService.decrement();
  }

  reset(): void {
    this.counterService.reset();
  }
}
