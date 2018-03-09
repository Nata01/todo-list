import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import {RouterModule, Routes} from '@angular/router';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [TodoListComponent, TodoListItemComponent, TodoDetailComponent]
})
export class TodoModule {
  static routes: Routes = [
    {path: 'todo-list', component: TodoListComponent},
    {path: 'todo-list/:id', component: TodoDetailComponent},
  ];
}
