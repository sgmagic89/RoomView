import { IUser } from '../../layout/models/user/user.model';

export interface AuthState {
    user: IUser;
    isLoggedIn: boolean;
    token: string;
    error: string;
}

export const initAuthState: AuthState = {
    user: {username: null, password: null, role: null},
    isLoggedIn: false,
    token: null,
    error: null
};
