
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './Core/Authentication/Service/authguard.service';

const appRoutes: Routes = [
{
    path: 'authentication',
    loadChildren: './Core/Authentication/authentication.module#AuthenticationModule',
},
{
    path: 'portal',
    loadChildren: './Core/Portal/portal.module#PortalModule',
    canActivate: [AuthGuard]
},
{
    path: '',
    redirectTo: 'authentication',
    pathMatch: 'full'
},
{
    path: '**',
    redirectTo: 'authentication'
}
];

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule],
providers: []
})
export class RoutingModule { }
