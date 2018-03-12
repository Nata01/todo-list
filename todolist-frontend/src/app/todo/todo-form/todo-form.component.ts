import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output()
  formFilled = new EventEmitter<any>();

  todoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.todoForm = fb.group({
      description: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.todoForm.valid) {
      this.formFilled.next(this.todoForm.value);
    } else {
      console.error('Form is not valid!');
    }
  }
}
