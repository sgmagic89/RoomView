
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './authentication/services/authguard.service';

const appRoutes: Routes = [
{
    path: 'signin',
    loadChildren: './authentication/authentication.module#AuthenticationModule',
},
{
    path: 'portal',
    loadChildren: './layout/layout.module#LayoutModule',
    canActivate: [AuthGuard]
},
{
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
},
{
    path: '**',
    redirectTo: 'signin',
    pathMatch: 'full'
}
];

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule],
providers: []
})
export class RoutingModule { }
