import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {PagedResponse} from '../../paged-response';
import {Todo} from '../todo';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class TodoListResolver implements Resolve<PagedResponse<Todo>> {
  constructor(private http: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.http.get<PagedResponse<Todo>>('/api/todos');
  }
}
