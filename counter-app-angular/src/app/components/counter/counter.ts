import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { CounterService } from '../../services/counter-service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './counter.html',
  styleUrls: ['./counter.scss'],
})
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
