
import { IUser } from "../../layout/childmodules/usermanagement/model/user.model";

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
