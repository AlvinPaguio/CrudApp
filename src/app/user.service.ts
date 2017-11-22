import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Restangular } from 'ngx-restangular';
import { User } from './user';

@Injectable()
export class UserService {

  private users: User[];

  constructor(private restangular: Restangular) { }

  getUsers(): Observable<User[]> {
    return this.restangular.all('users').getList();
  }

  /** PUT: update the hero on the server */
  updateUser(user: User): Observable<any> {
    return this.restangular.one('users', user.id).customPUT(user);

  }

  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;

    return this.restangular.one('users', id).remove();
  }

  /** POST: add a new hero to the server */
  addUser(user: User): Observable<User> {
    return this.restangular.all('user').post(user);
  }
}