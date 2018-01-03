const BASE_URL = 'http://localhost:81/api';
const AUTHENTICATION_URI = BASE_URL + '/Authentication';
const MANAGEUSER_URI = BASE_URL + '/ManageUser';
const CONFIGURATION_URI = BASE_URL + '/Configuration';

export abstract class AccountUrl {
    public static URL_Login = AUTHENTICATION_URI + '/Login';
    public static URL_ForgotPassword = AUTHENTICATION_URI + '/ForgotPassword';
    public static URL_SignOut = AUTHENTICATION_URI + '/Signout';
}

export abstract class ManageUserUrl {
    public static URL_GetAllUser = MANAGEUSER_URI + '/GetAll';
    public static URL_AddUser = MANAGEUSER_URI + '/AddUser';
    public static URL_DeleteUser = MANAGEUSER_URI + '/DeleteUser';
    public static URL_UpdateUser = MANAGEUSER_URI + '/UpdateUser';
}

export abstract class ConfigurationUrl {
    public static URL_NetworkConfiguration = CONFIGURATION_URI + '/NetworkConfiguration';
    public static URL_SmtpConfiguration = CONFIGURATION_URI + '/SmtpConfiguration';
    public static URL_SystemConfiguration = CONFIGURATION_URI + '/SystemConfiguration';
}
