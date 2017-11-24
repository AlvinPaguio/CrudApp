import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { findIndex } from 'lodash';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  public user;
  users: User[];

  constructor(public bsModalRef: BsModalRef,
              public userService: UserService) { }

  ngOnInit() {
  }


  delete(user: User): void {
    this.userService.deleteUser(user).subscribe($user => {
      const index = findIndex(this.users, { id: user.id })
      this.users.splice(index, 1);
      this.bsModalRef.hide();
    });
  }


}
