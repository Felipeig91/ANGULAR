import { Component } from '@angular/core';
import { Counter } from './components/counter/counter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Counter],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {}
