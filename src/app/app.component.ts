import { Component } from '@angular/core';
import { TODO } from './models/todo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // harcoded --> shoud get data from some service like todoService
  todos: TODO[] = [
    { title: 'Salir a caminar', body: 'Es necesario ejercitarse', completed: false },
    { title: 'Comprar comida para Coki', body: 'Comprar el alimento del perro', completed: true },
    { title: 'Tomar más agua', body: 'Es necesario tomar 2 litros de agua por día', completed: false },
    { title: 'Buscar info', body: 'Nuevas MacBooks pro', completed: true },
    { title: 'Mirar serie nueva', body: 'Ya salió la nueva temporada de Stranger Things!', completed: false },
  ];
}
