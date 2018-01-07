import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../services/user/user.service';
import { IUser } from '../../../models/user/user.model';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html'
})
export class AdduserComponent implements OnInit {

  formValid = false;

  constructor(private userService: UserService,
    public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
    this.userService.userFormValidity$.subscribe(
      valid => {
        this.formValid = valid;
      }
    );
  }

  addThisUser() {
    let userToCreate: IUser;
    this.userService.userFormData$.subscribe(
      user => {
        userToCreate = user;
      }
    );
    this.userService.createUser(userToCreate);
    this.activeModal.close();
  }
}
