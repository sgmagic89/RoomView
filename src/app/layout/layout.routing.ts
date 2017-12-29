
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../authentication/service/authguard.service';
import { LayoutComponent } from './component/layout.component';
import { ControlComponent } from './component/control/component/control.component';
import { ProvisionComponent } from './component/provision/component/provision.component';
import { ConfigurationComponent } from './component/configuration/component/configuration.component';
import { UsermanagementComponent } from './component/usermanagement/component/usermanagement.component';

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
