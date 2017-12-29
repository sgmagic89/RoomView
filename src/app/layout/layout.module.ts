import { NgModule } from '@angular/core';
import { LayoutComponent } from './component/layout.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutRoutingModule } from './layout.routing';
import { ControlComponent } from './component/control/component/control.component';
import { ProvisionComponent } from './component/provision/component/provision.component';
import { UsermanagementComponent } from './component/usermanagement/component/usermanagement.component';
import { ConfigurationComponent } from './component/configuration/component/configuration.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ControlComponent,
    ProvisionComponent,
    UsermanagementComponent,
    ConfigurationComponent
  ],
  imports: [
    SharedModule,
    LayoutRoutingModule
  ]

})
export class LayoutModule { }
