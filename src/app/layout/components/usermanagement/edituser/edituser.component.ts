import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html'
})
export class EdituserComponent implements OnInit {
  formValid = false;
  constructor(private userService: UserService,
  public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.userService.userFormValidity$.subscribe(
      valid => {
        this.formValid = valid;
      }
    );
  }

  saveChanges() {
  }

}
