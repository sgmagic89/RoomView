import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Model, ModelFactory } from 'ngx-model';
import { ApiService } from '../../../../shared/services/api/api.service';
import { ISystemSetting } from '../../../models/configuration/config.model';
import { ConfigurationService } from '../../../services/configuration/configuration.service';
import { Errors } from '../../../../shared/models/error.model';
import { CustomValidators } from 'ng2-validation';
@Component({
  selector: 'app-systemconfigration',
  templateUrl: './systemconfigration.component.html'
})
export class SystemconfigrationComponent implements OnInit {
  public form: FormGroup;
  public systemTimeFormControl: AbstractControl;

  public errorsmodel: Model<Errors>;
  errors$: Observable<Errors>;
  errors = <Errors> {
    systemTimeError: '',
  };
  constructor(public fb: FormBuilder,
    public systemErrorModelFactory: ModelFactory<Errors>,
    private configApi: ConfigurationService) {
      this.initErrorModel();
     }

  ngOnInit() {
    // this.getSystemConfiguration();
    this.initForm();
  }

  /**
    * initForm() - Initialize the form
    * @param <None> No Parameter
    * @return <None> No return value
    */
  initForm() {
    this.form = this.fb.group({
      // tslint:disable-next-line:max-line-length
      systemTime: new FormControl(null, Validators.compose([Validators.required]))
    });
   this.systemTimeFormControl = this.form.controls['systemTime'];
  }

    /**
    * initErrorModel() - Initialize the error model for the form
    * @param <None> No Parameter
    * @return <None> No return value
    */
  initErrorModel() {
    this.errorsmodel = this.systemErrorModelFactory.create(this.errors);
    this.errors$ = this.errorsmodel.data$;
    this.errors$.subscribe(error => {
    this.errors.systemTimeError = error.systemTimeError;
  });
  }

   /**
    * saveSmtpConfiguration() - Save the entered system configuration in database by calling the API
    * @param <None> No Parameter
    * @return <None> No return value
    */
  saveSystemConfiguration() {
  }

  resetForm() {
    this.form.reset();
  }


}
