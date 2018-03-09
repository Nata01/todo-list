import {Component, OnInit} from '@angular/core';
import {PagedResponse} from '../../paged-response';
import {Todo} from '../todo';
import 'rxjs/add/operator/map';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    const todos: PagedResponse<Todo> = this.route.snapshot.data.pagedTodos;
    this.todos = todos.content;
  }

}
