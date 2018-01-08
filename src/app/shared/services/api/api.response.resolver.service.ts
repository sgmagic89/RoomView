import { Injectable } from '@angular/core';
import { AuthState, initAuthState } from '../../../authentication/models/authstate.model';
import { ApiResponse } from '../../models/api.response.model';
import { initUser } from '../../../layout/models/user/user.model';

@Injectable()
export class ApiResponseResolverService {

constructor() { }

Authentication_Login_Resolver(response: ApiResponse): AuthState {

    const responseData: AuthState = initAuthState;

    if (response.result.data.length) {
        responseData.isLoggedIn = response.status;
        responseData.token = response.result.data[0].token;
        responseData.user.userId = response.result.data[0].userid;
        responseData.user.username = response.result.data[0].username;
        responseData.user.role = response.result.data[0].role;
        responseData.user.contactNumber = response.result.data[0].contactnumber;
        responseData.user.address = response.result.data[0].address;
        responseData.error = null;
    }

    if (response.result.error.length) {
        responseData.isLoggedIn = response.status;
        responseData.token = null;
        responseData.error = response.result.error[0].errorMsg;
        responseData.user = initUser;
    }

    return responseData;
}



}
