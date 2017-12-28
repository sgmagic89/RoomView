import { NgModule } from '@angular/core';
import { LayoutComponent } from './component/layout.component';
import { ControlModule } from './childmodules/control/control.module';
import { ProvisionModule } from './childmodules/provision/provision.module';
import { ConfigurationModule } from './childmodules/configuration/configuration.module';
import { UsermanagementModule } from './childmodules/usermanagement/usermanagement.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    ControlModule,
    ProvisionModule,
    ConfigurationModule,
    UsermanagementModule,
    SharedModule
  ]

})
export class LayoutModule { }
