import { AbstractControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../shared/services/api/api.service';
import { INetworkSetting } from '../../../models/configuration/config.model';
import { ConfigurationService } from '../../../services/configuration/configuration.service';

@Component({
  selector: 'app-networkconfiguration',
  templateUrl: './networkconfiguration.component.html',
  styleUrls: ['./networkconfiguration.component.scss']
})
export class NetworkconfigurationComponent implements OnInit {

  public form: FormGroup;
  public networkNameFormControl: AbstractControl;
  public threadChannelFormControl: AbstractControl;
  public threadMasterKeyFormControl: AbstractControl;
  public threadPanIdFormControl: AbstractControl;
  public threadExtendedPanIdFormControl: AbstractControl;

  constructor(private configApi: ConfigurationService) { }

  ngOnInit() {
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

  canSubmit(): boolean {
    return false;
  }

  resetForm() {
  }

}
