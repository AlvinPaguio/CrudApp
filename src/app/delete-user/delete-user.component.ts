import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  public user;
  public context;
  public delete: Function;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

}
