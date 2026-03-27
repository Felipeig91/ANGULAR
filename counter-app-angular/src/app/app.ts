import { Component } from '@angular/core';
import { Counter } from './components/counter/counter';

/*
  App root standalone.
  - standalone: true simplifica la inicialización y evita un AppModule engorroso.
  - imports: [Counter] declara que este componente depende del componente Counter,
    que a su vez trae sus propios módulos (CommonModule, FontAwesomeModule).

  Así se puede arrancar la app en main.ts con bootstrapApplication(App) (sin AppModule).
*/
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Counter],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {}
