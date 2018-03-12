import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoForm: FormGroup;

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private router: Router) {
    this.todoForm = fb.group({
      description: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.todoForm.valid) {
      this.http.post('/api/todos', this.todoForm.value)
        .toPromise()
        .then(() => {
          this.router.navigate(['/todo-list']);
        });
    } else {
      console.error('Form is not valid!');
    }
  }
}
