import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Model, ModelFactory } from 'ngx-model';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../shared/services/api/api.service';
import { INetworkSetting } from '../../../models/configuration/config.model';
import { ConfigurationService } from '../../../services/configuration/configuration.service';
import { Errors } from '../../../../shared/models/error.model';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-networkconfiguration',
  templateUrl: './networkconfiguration.component.html'
})
export class NetworkconfigurationComponent implements OnInit {

  public form: FormGroup;
  public networkNameFormControl: AbstractControl;
  public threadChannelFormControl: AbstractControl;
  public threadMasterKeyFormControl: AbstractControl;
  public threadPanIdFormControl: AbstractControl;
  public threadExtendedPanIdFormControl: AbstractControl;

  // Create a error observable to communicate with our validation directive
  public errorsmodel: Model<Errors>;
  errors$: Observable<Errors>;
  errors = <Errors> {
    networkNameError: '',
    threadPanIdError: '',
    threadExtendedPanIdError: '',
    threadChannelError: '',
    threadMasterKeyError: ''
  };

  constructor(public fb: FormBuilder,
    public networkErrorModelFactory: ModelFactory<Errors>,
    private configApi: ConfigurationService) {
      this.initErrorModel();
    }

  ngOnInit() {
    // this.getNetworkConfiguration();
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      networkName: new FormControl(null, Validators.compose([Validators.required])),
      threadChannel: new FormControl(null, Validators.compose([Validators.required,  CustomValidators.number])),
      threadExtendedPanId: new FormControl(null, Validators.compose([Validators.required, Validators.pattern('0[xX][0-9a-fA-F]+')])),
      threadMasterKey: new FormControl(null, Validators.compose([Validators.required])),
      threadPanId: new FormControl(null, Validators.compose([Validators.required, Validators.pattern('0[xX][0-9a-fA-F]+')])),
    });
   this.networkNameFormControl = this.form.controls['networkName'];
   this.threadChannelFormControl = this.form.controls['threadChannel'];
   this.threadExtendedPanIdFormControl = this.form.controls['threadExtendedPanId'];
   this.threadMasterKeyFormControl = this.form.controls['threadMasterKey'];
   this.threadPanIdFormControl = this.form.controls['threadPanId'];
  }

  initErrorModel() {
    this.errorsmodel = this.networkErrorModelFactory.create(this.errors);
    this.errors$ = this.errorsmodel.data$;
    this.errors$.subscribe(error => {
    this.errors.networkNameError = error.networkNameError;
    this.errors.threadChannelError = error.threadChannelError;
    this.errors.threadPanIdError = error.threadPanIdError;
    this.errors.threadExtendedPanIdError = error.threadExtendedPanIdError;
    this.errors.threadMasterKeyError = error.threadMasterKeyError;
  });
  }

  getNetworkConfiguration() {
    this.configApi.netwrokSettings$.subscribe(
      data => {
        this.networkNameFormControl.value.set(data.networkName);
        this.threadChannelFormControl.value.set(data.threadChannel);
        this.threadMasterKeyFormControl.value.set(data.threadMasterKey);
        this.threadPanIdFormControl.value.set(data.threadPanId);
        this.threadExtendedPanIdFormControl.value.set(data.threadExtendedPanId);
      }
    );
  }

  saveNetworkConfiguration() {
    const networkConfig: INetworkSetting = {
      networkName: this.networkNameFormControl.value,
      threadChannel: this.threadChannelFormControl.value,
      threadMasterKey: this.threadChannelFormControl.value,
      threadPanId: this.threadPanIdFormControl.value,
      threadExtendedPanId: this.threadExtendedPanIdFormControl.value
    };
    this.configApi.setNetworkSettings(networkConfig);
  }

  resetForm() {
    this.form.reset();
  }

}
