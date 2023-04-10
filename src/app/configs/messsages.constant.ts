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


    static readonly   errorGeneral: IError = {
        code: 'RB-001',
        title: 'Algo salio mal, intente de nuevo',
        message: '',
        status: StatusCodes.IM_A_TEAPOT
    };
    
}
