import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Model, ModelFactory } from 'ngx-model';
import { ApiService } from '../../../../shared/services/api/api.service';
import { ISmtpSetting } from '../../../models/configuration/config.model';
import { ConfigurationService } from '../../../services/configuration/configuration.service';
import { Errors } from '../../../../shared/models/error.model';
import { CustomValidators } from 'ng2-validation';
@Component({
  selector: 'app-smtpconfiguration',
  templateUrl: './smtpconfiguration.component.html',
  styleUrls: ['./smtpconfiguration.component.scss']
})
export class SmtpconfigurationComponent implements OnInit {
  public form: FormGroup;
  public smtpServerAddressFormControl: AbstractControl;
  public smtpServerUsernameFormControl: AbstractControl;
  public smtpServerPasswordFormControl: AbstractControl;
  public smtpServerPortFormControl: AbstractControl;

  public errorsmodel: Model<Errors>;
  errors$: Observable<Errors>;
  errors = <Errors> {
    smtpServerAddressError: '',
    smtpServerUsernameError: '',
    smtpServerPasswordError: '',
    smtpServerPortError: ''
  };
  constructor(public fb: FormBuilder,
    public smtpErrorModelFactory: ModelFactory<Errors>,
    private configApi: ConfigurationService) {
      this.initErrorModel();
     }

  ngOnInit() {
    // this.getSmtpConfiguration();
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      // tslint:disable-next-line:max-line-length
      smtpServerAddress: new FormControl(null, Validators.compose([Validators.required, Validators.pattern('(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])')])),
      smtpServerUsername: new FormControl(null, Validators.compose([Validators.required, CustomValidators.email])),
      smtpServerPassword: new FormControl(null, Validators.compose([Validators.required])),
      smtpServerPort: new FormControl(null, Validators.compose([Validators.required, CustomValidators.number]))
    });
   this.smtpServerAddressFormControl = this.form.controls['smtpServerAddress'];
   this.smtpServerUsernameFormControl = this.form.controls['smtpServerUsername'];
   this.smtpServerPasswordFormControl = this.form.controls['smtpServerPassword'];
   this.smtpServerPortFormControl = this.form.controls['smtpServerPort'];
  }

  initErrorModel() {
    this.errorsmodel = this.smtpErrorModelFactory.create(this.errors);
    this.errors$ = this.errorsmodel.data$;
    this.errors$.subscribe(error => {
    this.errors.smtpServerAddressError = error.smtpServerAddressError;
    this.errors.smtpServerUsernameError = error.smtpServerUsernameError;
    this.errors.smtpServerPasswordError = error.smtpServerPasswordError;
    this.errors.smtpServerPortError = error.smtpServerPortError;
  });
  }

  saveSmtpConfiguration() {
  }

  resetForm() {
    this.form.reset();
  }

}
