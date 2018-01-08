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

   /**
    * saveChanges() - Call the updateUser function of user service
    It collects the user data from the UserDetails form by subscribing the userFormData$ observable of user service.
    * @param <None> No Parameter
    * @return <None> No return value
    */
  saveChanges() {
  }

}
