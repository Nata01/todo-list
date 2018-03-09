import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PagedResponse} from '../../paged-response';
import {Todo} from '../todo';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<PagedResponse<Todo>>('/api/todos')
      .map(res => res.content)
      .subscribe(todos => this.todos = todos);
  }

}
