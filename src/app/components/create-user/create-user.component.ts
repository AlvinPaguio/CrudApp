import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Address } from '../../address';
import { Company } from '../../models/company.model';
import { UserStores } from '../../stores/user.stores';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  user: User;
  users: User[];

  constructor(public bsModalRef: BsModalRef,
              private userService: UserService,
              private userStore: UserStores) { }

  ngOnInit() {
    this.user = new User();
    this.user.address = new Address();
    this.user.company = new Company();
    console.log(this.user);
  }

  add(user): void {
    this.userStore.addUser(user);
    this.bsModalRef.hide();
  }
}
