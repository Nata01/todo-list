import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoListCreatePageComponent} from './todo-list-create-page.component';

describe('TodoListCreatePageComponent', () => {
  let component: TodoListCreatePageComponent;
  let fixture: ComponentFixture<TodoListCreatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListCreatePageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
