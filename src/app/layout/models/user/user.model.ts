import { Roles } from './roles.model';

export interface IUser {
    userId?: number;
    username: string;
    password: string;
    role?: Roles;
    name?: string;
    contactNumber?: string;
    address?: string;
}

export const initUser: IUser = {
    userId: null,
    username: null,
    password: null,
    role: null,
    name: null,
    contactNumber: null,
    address: null
};

