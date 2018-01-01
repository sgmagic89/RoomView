
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgotpassword/forgotpassword.component';

const appRoutes: Routes = [
    {
        path: 'signin',
        component: LoginComponent
    },
    {
        path: 'forgotpassword',
        component: ForgotPasswordComponent
    },
    {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
    }
];

@NgModule({
imports: [RouterModule.forChild(appRoutes)],
exports: [RouterModule],
providers: []
})
export class AuthRoutingModule { }
