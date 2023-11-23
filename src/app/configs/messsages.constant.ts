import { IMessage } from '@sicatel/shared/models/message.interface';
import { IError } from '@sicatel/shared/models/request/error.interface';
import { StatusCodes } from 'http-status-codes';

export class SicatelMessages {
    static readonly error = 'Error';
    static readonly unexpectedError: IError = {
        code: 'RB-000',
        title: 'Unexpected Error',
        message: 'Unexpected Error',
        status: StatusCodes.IM_A_TEAPOT
    };
    static readonly errorGeneral: IError = {
        code: 'RB-001',
        title: 'Algo salio mal, intente de nuevo',
        message: '',
        status: StatusCodes.IM_A_TEAPOT
    };
    static readonly errorSesionExpired: IError = {
        code: 'RB-002',
        title: 'La sesión expiro',
        message: 'Vuelva a identificarse',
        status: StatusCodes.UNAUTHORIZED
    };
    static readonly errorForbidden: IError = {
        code: 'RB-003',
        title: 'Acceso denegado',
        message: 'No tiene permisos al recurso',
        status: StatusCodes.FORBIDDEN
    };
    static readonly errorEmptyAccountOrPhone: IError = {
        code: 'RB-004',
        title: 'Faltan datos',
        message: 'Ingrese una cuenta o teléfono',
        status: StatusCodes.NOT_ACCEPTABLE
    };
    static readonly errorNotImplement: IError = {
        code: 'RB-005',
        title: 'Metodo no implementado',
        message: 'logica no implementada',
        status: StatusCodes.NOT_ACCEPTABLE
    };
    static readonly errorCsComplement: IError = {
        code: 'RB-006',
        title: 'Error al consultar',
        message: 'No logramos consultar la información',
        status: StatusCodes.NOT_ACCEPTABLE
    };
    static readonly errorGatewayTimeOut: IError = {
        code: 'RB-007',
        title: 'Error al consultar',
        message: 'Servicio no disponible',
        status: StatusCodes.GATEWAY_TIMEOUT
    };
    static readonly infoResponsabilidadPago: IMessage = {
        title:'Responsabilidad de pago IFT',
        message: 'La cuenta CAMBIO por una de responsabilidad de pago y por consiguiente el teléfono quedará vació'
    };

}
