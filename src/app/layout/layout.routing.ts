
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from "./component/layout.component";
import { AuthGuard } from "../authentication/service/authguard.service";

const appRoutes: Routes = [
    {
        path: 'control',
        loadChildren: './control/control.module#ControlModule',
        canActivateChild: [AuthGuard]
    },
    {   
        path: 'provision',
        loadChildren: './provision/provision.module#ProvisionModule',
        canActivateChild: [AuthGuard]
    },
    {   
        path: 'configuration',
        loadChildren: './configuration/configuration.module#ConfigurationModule',
        canActivateChild: [AuthGuard]
    },
    {  
        path: 'usermanager',
        loadChildren: './usermanagement/usermanagement.module#UsermanagementModule',
        canActivateChild: [AuthGuard]
    },
    {
        path: '',
        component: LayoutComponent,
        pathMatch: 'full'
    }
];

@NgModule({
imports: [RouterModule.forChild(appRoutes)],
exports: [RouterModule]
})
export class MainRoutingModule { }
