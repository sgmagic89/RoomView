import { IUser } from '../../Features/usermanagement/Model/user.model';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, Request, RequestMethod, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { AccountUrl } from './api.settings';
import 'rxjs/add/operator/map';
import { LocalStorageService } from '../../Shared/Services/localstorage.service';

@Injectable()
export class ApiService {

  constructor(private http: Http, private storageService: LocalStorageService) {}

  public authentication_login(username: string, password: string) {
    return this.request({
      body: {'email': username, 'password': password},
      method: RequestMethod.Post,
      url: AccountUrl.URL_Login
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
