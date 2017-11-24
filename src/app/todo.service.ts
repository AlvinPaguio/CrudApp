import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {

  private todos: Todo[];

  constructor(private restangular: Restangular) { }


  getUserTodos(id: string): Observable<Todo[]> {
    return this.restangular.one('users', id).all('todos').getList();
  }

}
