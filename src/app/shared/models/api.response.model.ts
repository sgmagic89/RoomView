import { ApiError } from './api.error.model';

export interface ApiResponse {
    status: boolean;
    result: Result;
    message: string;
}

export interface Result {
    data: any [];
    error: ApiError [];
}


