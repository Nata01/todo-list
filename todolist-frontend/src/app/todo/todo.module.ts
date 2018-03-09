import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoListItemComponent} from './todo-list-item/todo-list-item.component';
import {RouterModule, Routes} from '@angular/router';
import {TodoDetailComponent} from './todo-detail/todo-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {TodoListResolver} from './todo-list.resolver';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  declarations: [TodoListComponent, TodoListItemComponent, TodoDetailComponent],
  providers: [TodoListResolver]
})
export class TodoModule {
  static routes: Routes = [
    {path: 'todo-list', component: TodoListComponent, resolve: {pagedTodos: TodoListResolver}},
    {path: 'todo-list/:id', component: TodoDetailComponent},
  ];
}
