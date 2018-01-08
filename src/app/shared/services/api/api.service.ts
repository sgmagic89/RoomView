import { Observable } from 'rxjs/Observable';
import { Headers, Http, Request, RequestMethod, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { AccountUrl, ConfigurationUrl, ManageUserUrl } from './api.settings';
import 'rxjs/add/operator/map';
import { LocalStorageService } from '../localstorage/localstorage.service';
import { INetworkSetting, ISmtpSetting, ISystemSetting } from '../../../layout/models/configuration/config.model';
import { IUser } from '../../../layout/models/user/user.model';

@Injectable()
export class ApiService {

  constructor(private http: Http, private storageService: LocalStorageService) {}

  // Authentication APIs
  /**
    * authentication_login() - creates the Login API call
    * @param <string,string> username/email , password
    * @return <Observable> Returns Observable of the response
    */
  public authentication_login(username: string, password: string) {
    return this.request({
      body: {'email': username, 'password': password},
      method: RequestMethod.Post,
      url: AccountUrl.URL_Login
    });
  }

    /**
    * authentication_login() - creates the logout API call
    * @param <string> username/email
    * @return <Observable> Returns Observable of the response
    */
  public authentication_logout(username: string) {
    return this.requestWithToken({
      body: {'email': username},
      method: RequestMethod.Post,
      url: AccountUrl.URL_SignOut
    });
  }


  // Configuration APIs
  /**
    * configuration_set_networksettings() - creates the API to save the network config settings call
    * @param <INetworkSetting> Network settings to set
    * @return <Observable> Returns Observable of the response
    */
  public configuration_set_networksettings(networkSettings: INetworkSetting) {
    return this.requestWithToken({
      body: {
        'networkName': networkSettings.networkName,
        'threadChannel': networkSettings.threadChannel,
        'threadMasterKey': networkSettings.threadMasterKey,
        'threadPanId': networkSettings.threadPanId,
        'threadExtendedPanId': networkSettings.threadExtendedPanId
      },
      method: RequestMethod.Post,
      url: ConfigurationUrl.URL_NetworkConfiguration
    });
  }

  /**
    * configuration_get_networksettings() - creates the API call to get the network config settings
    * @param <None> No parameters
    * @return <Observable> Returns Observable of the response
    */
  public configuration_get_networksettings() {
    return this.requestWithToken({
      method: RequestMethod.Get,
      url: ConfigurationUrl.URL_NetworkConfiguration
    });
  }

  /**
    * configuration_set_smtpsettings() - creates the API call to save the smtp config settings
    * @param <ISmtpSetting> SMTP settings to set
    * @return <Observable> Returns Observable of the response
    */
  public configuration_set_smtpsettings( smtpSettings: ISmtpSetting) {
    return this.requestWithToken({
      body: {
        'smtpServerAddress': smtpSettings.smtpServerAddress,
        'smtpUserName': smtpSettings.smtpUserName,
        'smtpPassword': smtpSettings.smtpPassword,
        'smtpPort': smtpSettings.smtpPort
      },
      method: RequestMethod.Post,
      url: ConfigurationUrl.URL_SmtpConfiguration
    });
  }

  /**
    * configuration_get_smtpsettings() - creates the API call to get the smtp config settings
    * @param <None> No parameters
    * @return <Observable> Returns Observable of the response
    */
  public configuration_get_smtpsettings() {
    return this.requestWithToken({
      method: RequestMethod.Get,
      url: ConfigurationUrl.URL_SmtpConfiguration
    });
  }

  /**
    * configuration_set_systemsettings() - creates the API call to save the system config settings
    * @param <ISystemSetting> System settings to set
    * @return <Observable> Returns Observable of the response
    */
  public configuration_set_systemsettings(settings: ISystemSetting) {
    return this.requestWithToken({
      body: {
        systemTime: settings.systemTime
      },
      method: RequestMethod.Post,
      url: ConfigurationUrl.URL_SystemConfiguration
    });
  }

  /**
    * configuration_get_systemsettings() - creates the API call to get the system config settings
    * @param <None> No parameters
    * @return <Observable> Returns Observable of the response
    */
  public configuration_get_systemsettings() {
    return this.requestWithToken({
      method: RequestMethod.Get,
      url: ConfigurationUrl.URL_SystemConfiguration
    });
  }


  // User Management APIs
  /**
    * usermanagement_get_all_users() - creates the API call to get all users
    * @param <None> No parameters
    * @return <Observable> Returns Observable of the response
    */
  public usermanagement_get_all_users() {
    return this.requestWithToken({
      method: RequestMethod.Get,
      url: ManageUserUrl.URL_GetAllUser
    });
  }

  /**
    * usermanagement_create_user() - creates the API call to create an user
    * @param <IUser> User to create
    * @return <Observable> Returns Observable of the response
    */
  public usermanagement_create_user(user: IUser) {
    return this.requestWithToken({
      body: {
        'username': user.username,
        'name': user.name,
        'contactnumber': user.contactNumber,
        'role': user.role,
        'address': user.address
      },
      method: RequestMethod.Post,
      url: ManageUserUrl.URL_AddUser
    });
  }

  /**
    * usermanagement_update_user() - creates the API call to update an user
    * @param <IUser> User to update
    * @return <Observable> Returns Observable of the response
    */
  public usermanagement_update_user(user: IUser) {
    return this.requestWithToken({
      body: {
        'username': user.username,
        'name': user.name,
        'contactnumber': user.contactNumber,
        'role': user.role,
        'address': user.address
      },
      method: RequestMethod.Post,
      url: ManageUserUrl.URL_UpdateUser
    });
  }

  /**
    * usermanagement_delete_user() - creates the API call to delete an user
    * @param <IUser> User to delete
    * @return <Observable> Returns Observable of the response
    */
  public usermanagement_delete_user(user: IUser) {
    return this.requestWithToken({
      body: {
        'username': user.username
      },
      method: RequestMethod.Post,
      url: ManageUserUrl.URL_DeleteUser
    });
  }

  /**
    * request() - creates the API request for non secure API calls which needs no token
    * @param <any> request options body, header
    * @return <Observable> Returns Observable of the response
    */
  private request(options: any): Observable<any> {
    if (options.body) {
      if (typeof options.body !== 'string') {
        options.body = JSON.stringify(options.body);
      }

      options.headers = new Headers({
        'Content-Type': 'application/json'
      });
    }

    return this.http.request(new Request(options))
      .map((res: Response) => res.json());
  }

   /**
    * request() - creates the API request for secure API calls which needs token
    * @param <any> request options body, header
    * @return <Observable> Returns Observable of the response
    */
  private requestWithToken(options): Observable<any> {
    const token = this.storageService.getItem('token');
    if (token === null || token === undefined ) {
    } else {
      console.log('Calling protected URL ...');

      options.headers = new Headers();
      options.headers.append('Content-Type', 'application/json');
      options.headers.append('Authorization', 'Bearer ' + token);

      if (options.body && typeof options.body !== 'string') {
        options.body = JSON.stringify(options.body);
      }

      return this.http.request(new Request(options)).map((res: Response) => res.json());

    }
  }

}
