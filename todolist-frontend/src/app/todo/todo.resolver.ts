import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Todo} from './todo';

@Injectable()
export class TodoResolver implements Resolve<Todo> {
  constructor(private http: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.http.get<Todo>('/api/todos/' + route.params.id);
  }
}
