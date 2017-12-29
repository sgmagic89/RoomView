import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LayoutRoutingModule } from './layout.routing';
import { LayoutComponent } from './layout.component';
import { ControlComponent } from './components/control/control.component';
import { ProvisionComponent } from './components/provision/provision.component';
import { UsermanagementComponent } from './components/usermanagement/usermanagement.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { FirmwareupdateComponent } from './components/firmwareupdate/firmwareupdate.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ControlComponent,
    ProvisionComponent,
    UsermanagementComponent,
    ConfigurationComponent,
    FirmwareupdateComponent
  ],
  imports: [
    SharedModule,
    LayoutRoutingModule
  ]

})
export class LayoutModule { }
