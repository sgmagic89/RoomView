import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ModelFactory, Model } from 'ngx-model';
import { Subscription } from 'rxjs/Subscription';
import { ApiService } from '../../shared/services/api/api.service';
import { LocalStorageService } from '../../shared/services/localstorage/localstorage.service';
import { AlertService } from '../../shared/services/alert/alert.service';
import { IUser } from '../../layout/models/user/user.model';
import { AuthState, initAuthState } from '../models/authstate.model';
import { ApiResponseResolverService } from '../../shared/services/api/api.response.resolver.service';
import { UserService } from '../../layout/services/user/user.service';

@Injectable()
export class AuthenticationService {

private model: Model<AuthState>;
authState$: Observable<AuthState>;


constructor(private apiService: ApiService,
    private modelFactory: ModelFactory<AuthState>,
    private storageService: LocalStorageService,
    private router: Router,
    private alertService: AlertService,
    private apiRespResolver: ApiResponseResolverService ) {
    this.model = this.modelFactory.create(initAuthState);
    this.authState$ = this.model.data$;
 }

 /**
* login() - Makes a call to the login API to get the token
*
* @param <IUser> username/email and password
* @return <Observable> Observable of type AuthState notifying if the login was successful or un-successful
*/
public login(user: IUser): Observable<AuthState> {
    const apiSubscription: Subscription = this.apiService.authentication_login(user.username, user.password)
    .subscribe(
        (response) => {
            if ( response ) {
                let authState = this.model.get();
                authState = this.apiRespResolver.Authentication_Login_Resolver(response);
                this.model.set(authState);
                this.storageService.storeItem('token', authState.token );
                this.router.navigate(['/portal']);
            }
        },
        (error) => {
            let authState = this.model.get();
            authState = this.apiRespResolver.Authentication_Login_Resolver(error);
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
