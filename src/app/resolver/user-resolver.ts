import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot } from '@angular/router';

import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Injectable()
export class UserResolver implements Resolve<User[]> {
  constructor(private userService: UserService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<User[]> {
    return this.userService.getUsers();
  }
}