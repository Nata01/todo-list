import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Todo} from '../todo';
import {PagedResponse} from '../../paged-response';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.css']
})
export class TodoListPageComponent implements OnInit {
  pagedTodos: PagedResponse<Todo>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.pagedTodos = this.route.snapshot.data.pagedTodos;
  }
}
