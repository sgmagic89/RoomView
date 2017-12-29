
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ControlComponent } from './components/control/control.component';
import { ProvisionComponent } from './components/provision/provision.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { UsermanagementComponent } from './components/usermanagement/usermanagement.component';
import { AuthGuard } from '../authentication/services/authguard.service';
import { FirmwareupdateComponent } from './components/firmwareupdate/firmwareupdate.component';

const appRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'control',
                component: ControlComponent,
                canActivateChild: [AuthGuard]
            },
            {
                path: 'provision',
                component: ProvisionComponent,
                canActivateChild: [AuthGuard]
            },
            {
                path: 'configuration',
                component: ConfigurationComponent,
                canActivateChild: [AuthGuard]
            },
            {
                path: 'usermanager',
                component: UsermanagementComponent,
                canActivateChild: [AuthGuard]
            },
            {
                path: 'firmwareupdate',
                component: FirmwareupdateComponent,
                canActivateChild: [AuthGuard]
            },
            {
                path: '',
                redirectTo: 'control',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
imports: [RouterModule.forChild(appRoutes)],
exports: [RouterModule]
})
export class LayoutRoutingModule { }
