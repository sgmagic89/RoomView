import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './Service/authentication.service';
import { LoginComponent } from './Component/Login/Login.component';
import { AuthRoutingModule } from './authentication.routing';
import { SharedModule } from '../../Shared/shared.module';
import { ForgotPasswordComponent } from './Component/ForgotPassword/ForgotPassword.component';

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
