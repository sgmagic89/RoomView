
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/Login.component';
import { ForgotPasswordComponent } from './components/forgotpassword/forgotpassword.component';

const appRoutes: Routes = [
{
    path: 'forgotpassword',
    component: ForgotPasswordComponent
},
{
    path: '',
    component: LoginComponent
}
];

@NgModule({
imports: [RouterModule.forChild(appRoutes)],
exports: [RouterModule],
providers: []
})
export class AuthRoutingModule { }
