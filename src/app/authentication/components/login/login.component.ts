import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { ModelFactory, Model } from 'ngx-model';
import { Observable } from 'rxjs/Observable';
import { Errors } from '../../../shared/models/error.model';
import { IUser } from '../../../layout/models/user/user.model';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

private form: FormGroup;
private emailFormControl: AbstractControl;
private passwordFormControl: AbstractControl;

// Create a error observable to communicate with our validation directive
public errorsmodel: Model<Errors>;
errors$: Observable<Errors>;
errors = <Errors> {
  emailError: '',
  passwordError: ''
};
constructor(private authService: AuthenticationService,
  public fb: FormBuilder,
  public modelFactory: ModelFactory<Errors>) {
    this.errorsmodel = modelFactory.create(this.errors);
    this.errors$ = this.errorsmodel.data$;
    this.errors$.subscribe(error => {
    this.errors.emailError = error.emailError;
    this.errors.passwordError = error.passwordError; });
   }

  ngOnInit() {
    this.form = this.fb.group({
      email: new FormControl(null, Validators.compose([Validators.required, CustomValidators.email])),
      password: new FormControl(null, Validators.compose([Validators.required]))
    });
   this.emailFormControl = this.form.controls['email'];
   this.passwordFormControl = this.form.controls['password'];
  }

  login() {
    const user: IUser = { username: this.emailFormControl.value, password: this.passwordFormControl.value, role: 'Admin' };
    this.authService.login(user);
  }

}
