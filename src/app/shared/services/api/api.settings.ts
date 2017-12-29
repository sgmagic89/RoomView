const BASE_URL = 'http://localhost:81/api';
const AUTHENTICATION_URI = BASE_URL + '/Authentication';
const MANAGEUSER_URI = BASE_URL + '/ManageUser';

export abstract class AccountUrl {
    public static URL_Login = AUTHENTICATION_URI + '/Login';
    public static URL_ForgotPassword = AUTHENTICATION_URI + '/ForgotPassword';
}

export abstract class ManageUserUrl {
    public static URL_AddUser = MANAGEUSER_URI + '/AddUser';
    public static URL_DeleteUser = MANAGEUSER_URI + '/DeleteUser';
    public static URL_UpdateUser = MANAGEUSER_URI + '/UpdateUser';
}
