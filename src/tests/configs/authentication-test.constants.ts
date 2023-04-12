import { IError } from "@sicatel/shared/models/request/error.interface";
import { IUserRequest } from "@sicatel/shared/models/request/user.interface";
import { IUserResponse } from "@sicatel/shared/models/response/User.response";
import { IToken, IUser } from "@sicatel/shared/models/user/User";

export class AuthenticationTestConstants {
    
    static readonly userRequest: IUserRequest = {
        userName: 'EX0000',
        position: 'V36',
        type: 'CAC',
        userArrayKey: 'telcel'
    } as IUserRequest;

    static readonly userResponse: IUserResponse = {
        accessToken:'asdkadklasdklajsdklajsdklajsdklajsdklasjdakld',
        username: 'EX0000',
        idUsuario: 'VXXXXX',
        type:'Bearer',
        roles: ['CAC']
    } as IUserResponse;

    static readonly error: IError = {
        title: 'Datos de acceso incorrectos',
        message: 'Valide la inforamción',
        code:'sicatel-authentication-100',
        status: {}
    } as IError;


    static readonly token : IToken = {
        type:'Bearer',
        accessToken: 'uasdjjaksdhadhlkadhaklsdhkl123l12hl3h12312h3',
        exp:123123123123,
        iat: 1231232133,
        sub: 'si3ks',
        user: {
            centro: 'CAC CENTRO',
            idCentro : '64',
            claveUsuarioDistribuidor: '',
            estatus: '7',
            fuerzaVenta:'',
            idGrupo:'AS',
            idRegion:7,
            idUsuario:'VXXXXX',
            ip: '192.168.1.103',
            nivelFuerzaVenta:'',
            nombreUsuario: 'PEDRO OZUNA YANDEL',
            numCaja: 99,
            numeroEmpleado: 'EX0000',
            oficinaVentas: 'M764',
            permisos: '1,2,3,4,5,6,7',
            posicion: 'V36',
            region: 'MEXICO',
            telefono: 0,
            tipo: 'CAC',
            uuid: 'e2213-123123-343414123'
        } as IUser
    } as IToken;
}