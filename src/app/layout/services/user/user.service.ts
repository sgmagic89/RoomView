import { ApiService } from '../../../shared/services/api/api.service';
import { Injectable } from '@angular/core';
import { IUser, initUser } from '../../models/user/user.model';
import { Model, ModelFactory } from 'ngx-model';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
@Injectable()
export class UserService {

    private usersModel: Model<IUser[]>;
    public users$: Observable<IUser[]>;

    public userFormDataModel: Model<IUser>;
    public userFormData$: Observable<IUser>;

    public userFormValidityModel: Model<boolean>;
    public userFormValidity$: Observable<boolean>;

constructor(private api: ApiService,
    private userModelFactory: ModelFactory<IUser[]>,
    private userFormDataModelFactory: ModelFactory<IUser>,
    private userFormValidityModelFactory: ModelFactory<boolean>) {
    this.usersModel = userModelFactory.create(Array.of(initUser));
    this.users$ = this.usersModel.data$;

    this.userFormDataModel =  userFormDataModelFactory.create(initUser);
    this.userFormData$ = this.userFormDataModel.data$;

    this.userFormValidityModel = this.userFormValidityModelFactory.create(false);
    this.userFormValidity$ = this.userFormValidityModel.data$;
}

/**
    * setUserFormData() - Set the user form data model
    * @param <IUser> User data to set
    * @return <None> No Return value
    */
 public setUserFormData(user: IUser) {
     this.userFormDataModel.set(user);
 }

 /**
    * setFormValidity() - Set the user form validity
    * @param <boolean> Form valid (true/false)
    * @return <None> No Return value
    */
 public setFormValidity(validity: boolean) {
    this.userFormValidityModel.set(validity);
 }


  /**
    * getAllUsers() - Get all users by calling the API
    * @param <None> No parameter
    * @return <Observable<IUser[]>> Returns array of user Observable
    */
 public getAllUsers(): Observable<IUser[]> {
     const apiSubscription: Subscription = this.api.usermanagement_get_all_users()
     .subscribe(
         response => {
             if (response) {
                this.usersModel.set(response.result);
             }
         },
         error => {
             this.usersModel.set(Array.of(initUser));
         },
         () => {
             apiSubscription.unsubscribe();
         }
     );

     return this.users$;
 }

 /**
    * createUser() - Create an user by calling the API
    Request to create an user. If success update the user list model
    * @param <IUser> User to create
    * @return <None> No return value
    */
 public createUser(user: IUser) {
    const apiSubscription: Subscription = this.api.usermanagement_create_user(user)
    .subscribe(
        response => {
            if (response) {
                const currentUsers: IUser[] = this.usersModel.get();
                currentUsers.push(response.result);
                this.usersModel.set(currentUsers);
            }
        },
        error => {
            console.log(error);
        },
        () => {
            apiSubscription.unsubscribe();
        }
    );
 }

  /**
    * deleteUser() - Delete an user by calling the API
    Request to delete an user. If success update the user list model
    * @param <IUser> User to delete
    * @return <None> No return value
    */
 public deleteUser(userToDelete: IUser) {
    const apiSubscription: Subscription = this.api.usermanagement_delete_user(userToDelete)
    .subscribe(
        response => {
            if (response) {
                const currentUsers: IUser[] = this.usersModel.get();
                currentUsers.forEach( user => {
                    if (user.username === userToDelete.username) {
                        const index = currentUsers.indexOf(user);
                        currentUsers.splice(index, 1);
                    }
                });
                this.usersModel.set(currentUsers);
            }
        },
        error => {
            console.log(error);
        },
        () => {
            apiSubscription.unsubscribe();
        }
    );
 }

 /**
    * updateUser() - Update an user by calling the API
    Request to update an user. If success update the user list model
    * @param <IUser> User to delete
    * @return <None> No return value
    */
 public updateUser(updatedUser: IUser) {
    const apiSubscription: Subscription = this.api.usermanagement_update_user(updatedUser)
    .subscribe(
        response => {
            if (response) {
                const currentUsers: IUser[] = this.usersModel.get();
                currentUsers.forEach( user => {
                    if (user.username === updatedUser.username) {
                        const index = currentUsers.indexOf(user);
                        currentUsers[index] = updatedUser;
                    }
                });
                this.usersModel.set(currentUsers);
            }
        },
        error => {
            console.log(error);
        },
        () => {
            apiSubscription.unsubscribe();
        }
    );
 }


}
