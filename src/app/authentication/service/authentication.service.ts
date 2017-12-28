import { Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { ApiService } from '../../Api/api.service';
import { IUser } from '../../../Features/usermanagement/Model/user.model';
import { AuthState, initAuthState } from '../Model/authstate.model';
import { Observable } from 'rxjs/Observable';
import { ModelFactory, Model } from 'ngx-model';
import { Subscription } from 'rxjs/Subscription';
import { LocalStorageService } from '../../../Shared/Services/localstorage.service';
import { AlertService } from '../../../Shared/Services/alert.service';

@Injectable()
export class AuthenticationService {

private model: Model<AuthState>;
authState$: Observable<AuthState>;


constructor(private apiService: ApiService,
    private modelFactory: ModelFactory<AuthState>,
    private storageService: LocalStorageService,
    private router: Router,
    private alertService: AlertService ) {
    this.model = this.modelFactory.create(initAuthState);
    this.authState$ = this.model.data$;
 }


public login(user: IUser): Observable<AuthState> {
    const apiSubscription: Subscription = this.apiService.authentication_login(user.username, user.password)
    .subscribe(
        (response) => {
            if ( response ) {
                const authState = this.model.get();
                authState.isLoggedIn = true;
                authState.user.username = user.username;
                authState.user.password = null;
                authState.token = response.token;
                authState.user.role = response.role;
                this.model.set(authState);
                this.storageService.storeItem('token', authState.token );
                this.router.navigate(['/portal']);
            }
        },
        (error) => {
            const authState = this.model.get();
            authState.isLoggedIn = false;
            authState.user.username = null;
            authState.user.password = null;
            authState.token = null;
            // authState.user.role = error.messages.toString();
            authState.user.role = 'Admin';
            this.model.set(authState);
            this.router.navigate(['/portal']);
            this.alertService.success('logged in successfully!!');
        },
        () => {
            apiSubscription.unsubscribe();
        }
    );

    return this.authState$;
}

}
