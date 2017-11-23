import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { Address } from '../address';
import { Company } from '../company';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  public user: User;
  users: User[];
  public add: Function;

  constructor(public bsModalRef: BsModalRef,
              private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
    this.user.address = new Address();
    this.user.company = new Company();

    console.log(this.user);
  }
}
