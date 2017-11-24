import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { CreateUserComponent } from '../create-user/create-user.component';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { clone, find } from 'lodash';
import { UserStores } from '../../stores/user.stores';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  bsModalRef: BsModalRef;
  users: User[];

  constructor(private userService: UserService,
              private modalService: BsModalService,
              private userStore: UserStores,
              private route: ActivatedRoute) { }

  public openEditModal(user) {
    this.bsModalRef = this.modalService.show(EditUserComponent);
    this.bsModalRef.content.users = this.users;
    this.bsModalRef.content.user = clone(user);
    this.bsModalRef.content.context = this;
  }

  public openCreateModal() {
    this.bsModalRef = this.modalService.show(CreateUserComponent);
    this.bsModalRef.content.users = this.users;
  }

  public openDeleteModal(user) {
    this.bsModalRef = this.modalService.show(DeleteUserComponent);
    this.bsModalRef.content.context = this;
    this.bsModalRef.content.user = user;
    this.bsModalRef.content.users = this.users;
  }

  ngOnInit() {
    this.getUsers();
    this.route.data
        .subscribe((data) => {
      console.log(data);
          this.userStore.storeUsers(data.users);
        });
  }

  getUsers(): void {
    this.userStore.getUsers()
        .subscribe(users => {
          this.users = users;
        });
  }

  update(user): void {
    this.userService.updateUser(user)
        .subscribe(u => {
          const $user = find(this.users, {id: u.id});
          Object.assign($user, u);
          console.log($user);
          this.bsModalRef.hide();
        });
  }
}
