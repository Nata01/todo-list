import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input()
  todos: Todo[];

  @Output()
  removeTodo = new EventEmitter();

  onItemRemove(todo: Todo) {
    this.removeTodo.next(todo);
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

}
