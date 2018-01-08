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

  /**
    * startEdit() - Find the data to edit and set the edit user form data
    Then it opens the EditUser Component in modal popup
    * @param <number> The row number of the data to edit
    * @return <None> No return value
    */
  startEdit(rowIndex: number) {
    this.userService.setUserFormData(this.rows[rowIndex]);
    const modalRef = this.modalService.open(EdituserComponent,{backdrop: "static"});
  }

   /**
    * startDelete() - Find the data to delete and call the deleteUser() of user service
    It opens a confirmation box before deleting the record
    * @param <number> The row number of the data to delete
    * @return <None> No return value
    */
  startDelete(rowIndex: number) {

  }

   /**
    * addNewUser() - Initialize the add user form data to blank
    Then it opens the AddUser Component in modal popup
    * @param <None> No parameters
    * @return <None> No return value
    */
  addNewUser() {
    this.userService.setUserFormData(initUser);
    const modalRef = this.modalService.open(AdduserComponent, {backdrop: "static"});

  }

}
