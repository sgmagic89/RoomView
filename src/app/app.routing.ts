
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './authentication/services/authguard.service';

const appRoutes: Routes = [
{
    path: 'portal',
    loadChildren: './layout/layout.module#LayoutModule',
    canActivate: [AuthGuard]
},
{
    path: '',
    loadChildren: './authentication/authentication.module#AuthenticationModule',
    pathMatch: 'full'
}
];

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule],
providers: []
})
export class RoutingModule { }
