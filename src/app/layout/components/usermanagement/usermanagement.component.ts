import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IUser, initUser } from '../../models/user/user.model';
import { Roles } from '../../models/user/roles.model';
import { UserService } from '../../services/user/user.service';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html'
})
export class UsermanagementComponent implements OnInit {
  rows = [];
  constructor(public userService: UserService, private modalService: NgbModal) {
    let user: IUser = {
      username: 'test1.example.com',
      password: 'testpassword',
      name: 'test1',
      address: 'test address 1',
      contactNumber: '1111111111',
      role: Roles.ADMIN
    };
    this.rows.push(user);
  }

  ngOnInit() {
  }

  startEdit(rowIndex: number) {
    this.userService.setUserFormData(this.rows[rowIndex]);
    const modalRef = this.modalService.open(EdituserComponent,{backdrop: "static"});
  }

  startDelete(rowIndex: number) {

  }

  addNewUser() {
    this.userService.setUserFormData(initUser);
    const modalRef = this.modalService.open(AdduserComponent, {backdrop: "static"});

  }

}
