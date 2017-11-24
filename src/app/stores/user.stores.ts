import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserService } from '../services/user.service';
import { share } from 'rxjs/operator/share';

@Injectable()
export class UserStores {
  private users: BehaviorSubject<User[]>;

  constructor(private userService: UserService) {this.users = new BehaviorSubject([]);
  }

  storeUsers(users: User[]) {
    this.users.next(users);
  }
  getUsers() {
    return this.users.asObservable().share();
  }

  addUser(user) {
    this.userService.addUser(user)
        .subscribe(($user) => {
          const $users = this.users.getValue();
          $users.push($user);
          this.users.next($users);

        });
  }
}
