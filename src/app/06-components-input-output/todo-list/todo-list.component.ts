import { Component, Input, OnInit } from '@angular/core';
import { TODO } from 'src/app/models/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  @Input() todos: TODO[] = [];

  ngOnInit(): void {
  }

  onTodoClicked(e: TODO) {
    e.completed = !e.completed;
  }

}
