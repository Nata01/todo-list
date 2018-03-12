import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-create-page',
  templateUrl: './todo-create-page.component.html',
  styleUrls: ['./todo-create-page.component.css']
})
export class TodoCreatePageComponent implements OnInit {

  constructor(private http: HttpClient,
              private router: Router) {
  }

  ngOnInit() {
  }

  submit(createForm) {
    this.http.post('/api/todos', createForm)
      .toPromise()
      .then(() => {
        this.router.navigate(['/todo-list']);
      });
  }
}
