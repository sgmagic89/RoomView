import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsermanagementComponent } from "./component/usermanagement.component";
import { UserService } from './service/user.service';
@NgModule({
  // imports: [
  // CommonModule
  // ],
  declarations: [UsermanagementComponent],
  providers: [UserService]
})
export class UsermanagementModule { }