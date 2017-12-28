import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './authentication.routing';
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from "./component/login/login.component";
import { ForgotPasswordComponent } from "./component/forgotpassword/forgotpassword.component";
import { AuthenticationService } from "./service/authentication.service";

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    ForgotPasswordComponent
  ],
  providers: [AuthenticationService]
})
export class AuthenticationModule { }
