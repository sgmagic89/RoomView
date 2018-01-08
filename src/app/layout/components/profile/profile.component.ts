import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  formValid = false;
  constructor(private userService: UserService) {

   }

  ngOnInit() {
    this.userService.userFormValidity$.subscribe(
      valid => {
        this.formValid = valid;
      }
    );
  }

  /**
    * updateProfile() - Call the updateProfile function of user service
    * @param <None> No Parameter
    * @return <None> No return value
    */
  updateProfile() {
  }

}
