import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LayoutRoutingModule } from './layout.routing';
import { LayoutComponent } from './layout.component';
import { ControlComponent } from './components/control/control.component';
import { ProvisionComponent } from './components/provision/provision.component';
import { UsermanagementComponent } from './components/usermanagement/usermanagement.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { FirmwareupdateComponent } from './components/firmwareupdate/firmwareupdate.component';
import { NetworkconfigurationComponent } from './components/configuration/networkconfiguration/networkconfiguration.component';
import { SystemconfigrationComponent } from './components/configuration/systemconfigration/systemconfigration.component';
import { SmtpconfigurationComponent } from './components/configuration/smtpconfiguration/smtpconfiguration.component';
import { ConfigurationService } from './services/configuration/configuration.service';
import { UserdetailsComponent } from './components/usermanagement/userdetails/userdetails.component';
import { AdduserComponent } from './components/usermanagement/adduser/adduser.component';
import { EdituserComponent } from './components/usermanagement/edituser/edituser.component';
import { ProfileComponent } from './components/usermanagement/profile/profile.component';
import { UserService } from './services/user/user.service';

@NgModule({
  declarations: [
    LayoutComponent,
    ControlComponent,
    ProvisionComponent,
    UsermanagementComponent,
    ConfigurationComponent,
    FirmwareupdateComponent,
    NetworkconfigurationComponent,
    SystemconfigrationComponent,
    SmtpconfigurationComponent,
    UserdetailsComponent,
    AdduserComponent,
    EdituserComponent,
    ProfileComponent
  ],
  imports: [
    SharedModule,
    LayoutRoutingModule
  ],
  providers: [ConfigurationService, UserService],
  entryComponents: [AdduserComponent, EdituserComponent]

})
export class LayoutModule { }
