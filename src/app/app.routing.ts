
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./authentication/service/authguard.service";
import { LayoutComponent } from "./layout/component/layout.component";

const appRoutes: Routes = [
{
    path: 'authentication',
    loadChildren: './authentication/authentication.module#AuthenticationModule',
},
{
    path: 'portal',
    loadChildren: './layout/layout.module#LayoutModule',
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
