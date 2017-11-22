import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  public user: User;
  users: User[];

  constructor(public bsModalRef: BsModalRef,
              private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
    console.log(this.user);
  }

  save(): void {
    this.userService.updateUser(this.user)
        .subscribe();
  }

  add(user): void {
    console.log(user);
    if (!user) { return; }
    this.userService.addUser(user)
        .subscribe(_user => {
          this.users.push(_user);
        });
  }

}
