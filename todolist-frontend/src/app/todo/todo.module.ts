import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoListItemComponent} from './todo-list-item/todo-list-item.component';
import {RouterModule, Routes} from '@angular/router';
import {TodoDetailComponent} from './todo-detail/todo-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {TodoListResolver} from './todo-list.resolver';
import {TodoListPageComponent} from './todo-list-page/todo-list-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  declarations: [TodoListComponent, TodoListItemComponent, TodoDetailComponent, TodoListPageComponent],
  providers: [TodoListResolver]
})
export class TodoModule {
  static routes: Routes = [
    {path: 'todo-list', component: TodoListPageComponent, resolve: {pagedTodos: TodoListResolver}},
    {path: 'todo-list/:id', component: TodoDetailComponent},
  ];
}
