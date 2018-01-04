import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Model } from 'ngx-model';
import { Errors } from '../../../../shared/models/error.model';
import { Observable } from 'rxjs/Observable';
import { ModelFactory } from 'ngx-model';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
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
  constructor(public fb: FormBuilder,
    public modelFactory: ModelFactory<Errors>) {
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
  }

}
