import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Model, ModelFactory } from 'ngx-model';
import { Observable } from 'rxjs/Observable';
import { CustomValidators } from 'ng2-validation';
import { Errors } from '../../../shared/models/error.model';
import { AuthenticationService } from '../../services/authentication.service';
import { IUser } from '../../../layout/models/user/user.model';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html'
})
export class ForgotPasswordComponent implements OnInit {
  public form: FormGroup;
  public emailFormControl: AbstractControl;

  public errorsmodel: Model<Errors>;
  errors$: Observable<Errors>;
  errors = <Errors> {
    emailError: ''
  };
  constructor(private authService: AuthenticationService,
    public fb: FormBuilder,
    public modelFactory: ModelFactory<Errors>) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: new FormControl(null, Validators.compose([Validators.required, CustomValidators.email]))
    });
   this.emailFormControl = this.form.controls['email'];
  }

    /**
  * forgotPassword() - Calls the forgotPassword function of Authentication Service
  *
  * @param <IUser> username/email and password
  * @return <> none
  */
  forgotPassword(user: IUser) {
  }



}
