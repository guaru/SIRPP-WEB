import { StatusCodes } from 'http-status-codes';

export interface IError {
    title: string;
    message: string;
    code: string;
    status: StatusCodes;
}
