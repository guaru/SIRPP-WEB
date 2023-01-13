import { IError } from '@sicatel/shared/models/request/error.interface';
import { StatusCodes } from 'http-status-codes';

export class SicatelMessages {
    // General Purpose
    static readonly error = 'Error';

    static readonly unexpectedError: IError = {
        code: 'RB-000',
        title: 'Unexpected Error',
        message: 'Unexpected Error',
        status: StatusCodes.IM_A_TEAPOT
    };
}
