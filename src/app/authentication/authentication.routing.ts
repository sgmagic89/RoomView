
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Component/Login/Login.component';
import { ForgotPasswordComponent } from './Component/ForgotPassword/ForgotPassword.component';

const appRoutes: Routes = [
{
    path: 'login',
    component: LoginComponent
},
{
    path: 'forgotpassword',
    component: ForgotPasswordComponent
},
{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
},
{
    path: '**',
    redirectTo: 'login'
}
];

@NgModule({
imports: [RouterModule.forChild(appRoutes)],
exports: [RouterModule],
providers: []
})
export class AuthRoutingModule { }
