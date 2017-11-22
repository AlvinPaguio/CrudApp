import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { CreateUserComponent } from '../create-user/create-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  bsModalRef: BsModalRef;
  users: User[];

  constructor(private userService: UserService,
              private modalService: BsModalService) { }

  public openEditModal(user) {
    this.bsModalRef = this.modalService.show(EditUserComponent);
    this.bsModalRef.content.user = user;
    this.bsModalRef.content.context = this;
    this.bsModalRef.content.update = this.update;
  }

  public openCreateModal() {
    this.bsModalRef = this.modalService.show(CreateUserComponent);
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
        .subscribe(users => {
          this.users = users;
        });
  }

  delete(user: User): void {
    this.users = this.users.filter(h => h !== user);
    this.userService.deleteUser(user).subscribe();
  }


  update(user: User): void {
    this.userService.updateUser(user)
        .subscribe(user =>{
          this.bsModalRef.hide();
        });
  }
}
