import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
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

}
