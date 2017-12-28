import { PortalRoutingModule } from './portal.routing';
import { SharedModule } from '../../Shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvisionComponent } from '../../Features/provision/Component/provision/provision.component';
import { ControlComponent } from '../../Features/control/Component/control/control.component';
import { ConfigurationComponent } from '../../Features/configuration/Component/configuration/configuration.component';
import { PortalComponent } from './Component/portal.component';


@NgModule({
  declarations: [
    PortalComponent,
    ProvisionComponent,
    ControlComponent,
    ConfigurationComponent
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    SharedModule
  ]
})
export class PortalModule { }
