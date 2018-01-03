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

  public authentication_login(username: string, password: string) {
    return this.request({
      body: {'email': username, 'password': password},
      method: RequestMethod.Post,
      url: AccountUrl.URL_Login
    });
  }

  public authentication_logout(username: string) {
    return this.requestWithToken({
      body: {'email': username},
      method: RequestMethod.Post,
      url: AccountUrl.URL_SignOut
    });
  }


  // Configuration APIs

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

  public configuration_get_networksettings() {
    return this.requestWithToken({
      method: RequestMethod.Get,
      url: ConfigurationUrl.URL_NetworkConfiguration
    });
  }

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

  public configuration_get_smtpsettings() {
    return this.requestWithToken({
      method: RequestMethod.Get,
      url: ConfigurationUrl.URL_SmtpConfiguration
    });
  }

  public configuration_set_systemsettings(settings: ISystemSetting) {
    return this.requestWithToken({
      body: {
        systemTime: settings.systemTime
      },
      method: RequestMethod.Post,
      url: ConfigurationUrl.URL_SystemConfiguration
    });
  }

  public configuration_get_systemsettings() {
    return this.requestWithToken({
      method: RequestMethod.Get,
      url: ConfigurationUrl.URL_SystemConfiguration
    });
  }


  // User Management APIs
  public usermanagement_get_all_users() {
    return this.requestWithToken({
      method: RequestMethod.Get,
      url: ManageUserUrl.URL_GetAllUser
    });
  }

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

  public usermanagement_delete_user(user: IUser) {
    return this.requestWithToken({
      body: {
        'username': user.username
      },
      method: RequestMethod.Post,
      url: ManageUserUrl.URL_DeleteUser
    });
  }

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
