import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TODO } from '../../models/todo.interface';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {

  @Input() todo: TODO;

  @Output() todoClicked: EventEmitter<TODO>;
  constructor() {
    this.todo = { title: 'algo', body: 'algo', completed: false };
    this.todoClicked = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick() {
    this.todoClicked.emit(this.todo);
  }

}
