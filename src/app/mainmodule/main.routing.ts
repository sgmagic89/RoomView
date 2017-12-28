
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './Component/portal.component';
import { AuthGuard } from '../Authentication/Service/authguard.service';
import { ControlComponent } from '../../Features/control/Component/control/control.component';
import { ProvisionComponent } from '../../Features/provision/Component/provision/provision.component';
import { ConfigurationComponent } from '../../Features/configuration/Component/configuration/configuration.component';
import { ConfigurationService } from '../../Features/configuration/Service/configuration.service';
import { ControlService } from '../../Features/control/Service/control.service';
import { ProvisionService } from '../../Features/provision/Service/provision.service';

const appRoutes: Routes = [
{
    path: '',
    component: PortalComponent,
    children: [
        {
            path: 'control',
            component: ControlComponent,
            canActivate: [AuthGuard]
        },
        {   path: 'provision',
            component: ProvisionComponent,
            canActivate: [AuthGuard]
        },
        {   path: 'configuration',
            component: ConfigurationComponent,
            canActivate: [AuthGuard]
        },
        {   path: '',
            redirectTo: 'control',
            pathMatch: 'full'
        },
    ],
},
{
    path: '**',
    redirectTo: ''
}
];

@NgModule({
imports: [RouterModule.forChild(appRoutes)],
exports: [RouterModule],
providers: [
    ConfigurationService,
    ControlService,
    ProvisionService
]
})
export class PortalRoutingModule { }
