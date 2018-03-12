import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output()
  formFilled = new EventEmitter<any>();

  @Input()
  todo?: Todo;

  todoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.todoForm = fb.group({
      id: [''],
      description: ['', Validators.required]
    });
  }

  ngOnInit() {
    if (this.todo) {
      this.todoForm.setValue(this.todo);
    }
  }

  onSubmit() {
    if (this.todoForm.valid) {
      this.formFilled.next(this.todoForm.value);
    } else {
      console.error('Form is not valid!');
    }
  }
}
