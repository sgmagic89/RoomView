import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Model,ModelFactory } from 'ngx-model';
import { Errors } from '../../../../shared/models/error.model';
import { CustomValidators } from 'ng2-validation';
import { UserService } from '../../../services/user/user.service';
import { Subscription } from 'rxjs/Subscription';
import { IUser } from '../../../models/user/user.model';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {
public form: FormGroup;
  public nameFormControl: AbstractControl;
  public usernameFormControl: AbstractControl;
  public passwordFormControl: AbstractControl;
  public roleFormControl: AbstractControl;
  public addressFormControl: AbstractControl;
  public contactFormControl: AbstractControl;

  // Create a error observable to communicate with our validation directive
  public errorsmodel: Model<Errors>;
  errors$: Observable<Errors>;
  errors = <Errors> {
    usernameError: '',
    nameError: '',
    contactError: '',
    addressError: ''
  };

  roles = ['ADMIN', 'USER'];
  constructor(public fb: FormBuilder,
    public modelFactory: ModelFactory<Errors>,
    public userService: UserService) {
      this.errorsmodel = modelFactory.create(this.errors);
      this.errors$ = this.errorsmodel.data$;
      this.errors$.subscribe(error => {
      this.errors.usernameError = error.usernameError;
      this.errors.nameError = error.nameError;
      this.errors.contactError = error.contactError;
      this.errors.addressError = error.addressError;
    });
    }


  ngOnInit() {
    this.form = this.fb.group({
      username: new FormControl(null, Validators.compose([Validators.required, CustomValidators.email])),
      password: new FormControl(null, Validators.compose([Validators.required])),
      name: new FormControl(null, Validators.compose([Validators.required])),
      address: new FormControl(null, Validators.compose([Validators.required])),
      contact: new FormControl(null, Validators.compose([CustomValidators.number]))
    });
   this.usernameFormControl = this.form.controls['username'];
   this.passwordFormControl = this.form.controls['password'];
   this.nameFormControl = this.form.controls['name'];
   this.addressFormControl = this.form.controls['address'];
   this.contactFormControl = this.form.controls['contact'];
   this.getFormData();
   this.syncFormData();
  }

  getFormData() {
    const subscription: Subscription = this.userService.userFormData$.subscribe(
      data => {
        if (data.username !== null) {
        this.usernameFormControl.setValue(data.username);
        this.passwordFormControl.setValue('samplepassword');
        this.nameFormControl.setValue(data.name);
        this.addressFormControl.setValue(data.address);
        this.contactFormControl.setValue(data.contactNumber);
        subscription.unsubscribe();
        }
      }
    );
  }

  syncFormData() {
    let newUserData: IUser;
    this.form.valueChanges.subscribe(
      data => {
          newUserData = {
          username: this.usernameFormControl.value,
          password: this.passwordFormControl.value,
          name: this.nameFormControl.value,
          address: this.addressFormControl.value,
          contactNumber: this.contactFormControl.value
          };
          this.userService.setUserFormData(newUserData);
          if (this.form.valid) {
            this.userService.setFormValidity(true);
          } else {
            this.userService.setFormValidity(false);
          }
      }
    );
  }

}
