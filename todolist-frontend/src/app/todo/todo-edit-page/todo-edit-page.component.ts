import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Todo} from '../todo';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-todo-edit-page',
  templateUrl: './todo-edit-page.component.html',
  styleUrls: ['./todo-edit-page.component.css']
})
export class TodoEditPageComponent implements OnInit {
  todo: Todo;

  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private router: Router) {
  }

  ngOnInit() {
    this.todo = this.route.snapshot.data.todo;
  }

  updateTodo(updateForm) {
    this.http.put('/api/todos/' + this.todo.id, updateForm)
      .toPromise()
      .then(() => {
        this.router.navigate(['/todo-list']);
      });
  }
}
