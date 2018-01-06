import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {
  formValid = false;
  constructor(private userService: UserService) { }

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
