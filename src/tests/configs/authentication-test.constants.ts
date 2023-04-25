import { IError } from '@sicatel/shared/models/request/error.interface';
import { IUserRequest } from '@sicatel/shared/models/request/user.interface';
import { IUserResponse } from '@sicatel/shared/models/response/user.response';
import { IToken, IUser } from '@sicatel/shared/models/user/user';

export class AuthenticationTestConstants {

    static readonly userRequest: IUserRequest = {
        userName: 'EX0000',
        position: 'V36',
        type: 'CAC',
        userArrayKey: 'telcel'
    } as IUserRequest;

    static readonly userResponseInvalid: IUserResponse = {
        accessToken: 'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJFWDQ4Njg0NyIsImlhdCI6MTY4MTMzNTk3MywiZXhwIjoxNjgx'+
         'MzM5NTczLCJ1c2VyIjp7ImlkVXN1YXJpbyI6IlZJOVhYV1giLCJub21icmVVc3VhcmlvIjoiQUxFSkFORFJPIERFIEpFU1V'+
         'TIFZFTlRVUkEgTUFSVElORVoiLCJpZEdydXBvIjoiQ0FDIiwibnVtZXJvRW1wbGVhZG8iOiJFWDQ4Njg0NyIsImZ1ZXJ6YVZ'+
         'lbnRhIjpudWxsLCJpcCI6IjE5Mi4xNjguMS4xMDMiLCJuaXZlbEZ1ZXJ6YVZlbnRhIjpudWxsLCJwb3NpY2lvbiI6IlYzNiI'+
         'sInRlbGVmb25vIjowLCJjbGF2ZVVzdWFyaW9EaXN0cmlidWlkb3IiOm51bGwsInRpcG8iOiJDQUMiLCJlc3RhdHVzIjpudWxsL'+
         'CJ1dWlkIjoiZDJmMDVmZmEtNTE1NS00ZGI5LTk5NjItMzUyZDE2MzE2MGQ1IiwicmVnaW9uIjoiUHVlYmxhIiwiY2VudHJvIjoiQ'+
         '0FDIFBBUlFVRSBQVUVCTEEiLCJpZFJlZ2lvbiI6NywibnVtQ2FqYSI6OTAsIm9maWNpbmFWZW50YXMiOiJNNzk0IiwiaWRDZW50c'+
         'm8iOiI5NDMiLCJwZXJtaXNvcyI6IjEsMiwzLDQsNSw2LDcsOCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwyMCwyMSwyMiwyMywyNCwy'+
         'NSwyNywyOCwyOSwzOSw0MCw0MSw0Miw0Myw1MSw1Miw1Myw2Miw2Myw2NSw2Niw4Myw4NCw4NSw4Nyw4OCw4OSw5MSw5Miw5Myw5OCw5'+
         'OSwxMDEsMTAyLDEwMywxMDUsMTA3LDEwOCwxMDksMTEzLDExNCwxMTUsMTE5LDEyMSwxMjIsMTIzLDEyNCwxMjUsMTI2LDEzOSwxNDAsMT'+
         'YyLDE2MywxNzUsMTc2LDE4NCwxODUsMTg3LDE4OCwyMjQsMjI1LDIyNiwyMjgsMjI5LDIzMCwyMzQsMjM2LDI0NiwyNDcsMjYyLDI2My'+
         'wyNjQsMjY1LDI2NiwyNjcsMjY4LDI2OSwyNzAsMjcxLDI3MiwyNzMsMjc0LDI3NiwyNzcsMjc4LDI3OSwyODAsMjgxLDI4MiwyODMsMj'+
         'g3LDI4OCwyOTMsMjk0LDM0MSwzNDIsMzQ2LDM0NywzNDgsMzQ5LDM1NywzNjksMzkyLDQwMiw0MDMsNDA0LDQwNiw0MDcsNDA4LDQwOS'+
         'w0MTEsNDEyLDQxNiw0MTcsNDE5LDQyMCw0MjEsNDIyLDQyMyw0MjQsNDI1LDQyNiw0MjcsNDM1LDQzNiw0NDUsNDk1LDQ5Nyw1MDAsNTA'+
         'xLDUwMiw1MTcsNTE4LDUxOSw1MjAsNTIxLDUyMiw1MjMsNTI0LDUyNSw1MjYsNTUyLDIzNSwyNDQsNTY1LDU5Myw1OTIsNTk0LDU5Niw2'+
         'MTksNjIwLDYyMSw2MjIsNjIzLDYyNCw2MjUsNjI2LDUxMyw1NjksNTcwLDU3MSw1NzIsNTU3LDU3Myw1NzUsNjgsNjQ5LDYzNCw2MzUsN'+
         'jM2LDYzNyw2MzgsNjM5LDY0Miw1NjIsNTg0LDU3NCw2NTIsNjYyLDY2MSwyMDgsMjEwLDY1NiwyMDksNjUxLDY1NCw2NjQsNjcwLDY3NS'+
         'w2NjYsNjcsNjUzLDY3MSw2NzIsNjczLDY3NCw2NTcsNjY4LDY2OSw2NjAsNjY1LDY2Nyw1ODksNjc5LDY5MSw1OTEsNTg4LDY1LDY5MCw'+
         '2NTUsNjg0LDY4NSwyMDMsMjA0LDU2Niw1NjcsNTY4LDMwLDMyLDM2LDM3LDM4LDY0MywyOTUsMTM2LDEzMSwxMzAsMTMyLDEyOCwxMzQsM'+
         'TI5LDEzNywxMzgsMTM1LDEwMDMsMTAwNCwxMDA1LDEwMDYsMTAwNywxMDA4LDIwMywyMDQsMTI3LDEzMyw3MDAsMTAwMCw2NTAsNjYxLD'+
         'Y3MCw2NzUsNjUzLDY2NCw2NjUsNjY2LDY2Nyw2NjgsNjY5LDY3MCw2NzUsNjU3LDY3LDY1NSwyNjYsNDMsNjU5LDIyLDQzLDEwMDAsMTA'+
         'wMSw2NTQsNTkyLDU3NSJ9fQ.RPgIqqt34lIqtRTpswOaxKeg5x8XREOApH5KzrEPJZHZinIBcMe2NKbZeVtnsAqORQU2mYIhK6ZLYRpmM3'+
         'AWY7d5FHSmdsWReRv1GN6Mief-Eh66jUUOAw8D524e15bt1hcmaU8Yc10bZYfYO_d_H2srS_Ms95EzIKSRsDT_1N_zLTulBHbPhhTOuPP9'+
         'kUDlviO37kc466ZNvVSgDUKe7jyR9_HnBDoK9j8bTsvGE1IdJoe2xCqvNRFsZAwys1cfHty74kxf57iEIOpQ0jpU-VnFoGuug3K9EyH'+
         '6ctTXc59ZrZpPe9z2BduYqXFHBR8tgkr_mlpYy6l4nT1PYXAd_A',
        username: 'EX0000',
        idUsuario: 'VXXXXX',
        type:'Bearer',
        roles: ['CAC']
    } as IUserResponse;


    static readonly userResponse: IUserResponse = {
        accessToken:'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJFWDQ4Njg0NyIsImlhdCI6MTY4MTQxNjU2NCwidXNlciI6'+
        'eyJpZFVzdWFyaW8iOiJWSTlYWFdYIiwibm9tYnJlVXN1YXJpbyI6IkFMRUpBTkRSTyBERSBKRVNVUyBWRU5UVVJBIE1'+
        'BUlRJTkVaIiwiaWRHcnVwbyI6IkNBQyIsIm51bWVyb0VtcGxlYWRvIjoiRVg0ODY4NDciLCJmdWVyemFWZW50YSI6bnV'+
        'sbCwiaXAiOiIxOTIuMTY4LjEuMTAzIiwibml2ZWxGdWVyemFWZW50YSI6bnVsbCwicG9zaWNpb24iOiJWMzYiLCJ0ZWxl'+
        'Zm9ubyI6MCwiY2xhdmVVc3VhcmlvRGlzdHJpYnVpZG9yIjpudWxsLCJ0aXBvIjoiQ0FDIiwiZXN0YXR1cyI6bnVsbCwid'+
        'XVpZCI6ImYwNWViMGE2LTM1MDEtNGZkOS1iY2ZjLTk5MTlhZDIxOTEzZCIsInJlZ2lvbiI6IlB1ZWJsYSIsImNlbnRyby'+
        'I6IkNBQyBQQVJRVUUgUFVFQkxBIiwiaWRSZWdpb24iOjcsIm51bUNhamEiOjkwLCJvZmljaW5hVmVudGFzIjoiTTc5NCIs'+
        'ImlkQ2VudHJvIjoiOTQzIiwicGVybWlzb3MiOiIxLDIsMyw0LDUsNiw3LDgsMTEsMTIsMTMsMTQsMTUsMTYsMTcsMTgsM'+
        'jAsMjEsMjIsMjMsMjQsMjUsMjcsMjgsMjksMzksNDAsNDEsNDIsNDMsNTEsNTIsNTMsNjIsNjMsNjUsNjYsODMsODQsODU'+
        'sODcsODgsODksOTEsOTIsOTMsOTgsOTksMTAxLDEwMiwxMDMsMTA1LDEwNywxMDgsMTA5LDExMywxMTQsMTE1LDExOSwxM'+
        'jEsMTIyLDEyMywxMjQsMTI1LDEyNiwxMzksMTQwLDE2MiwxNjMsMTc1LDE3NiwxODQsMTg1LDE4NywxODgsMjI0LDIyNSwy'+
        'MjYsMjI4LDIyOSwyMzAsMjM0LDIzNiwyNDYsMjQ3LDI2MiwyNjMsMjY0LDI2NSwyNjYsMjY3LDI2OCwyNjksMjcwLDI3MSw'+
        'yNzIsMjczLDI3NCwyNzYsMjc3LDI3OCwyNzksMjgwLDI4MSwyODIsMjgzLDI4NywyODgsMjkzLDI5NCwzNDEsMzQyLDM0Niw'+
        'zNDcsMzQ4LDM0OSwzNTcsMzY5LDM5Miw0MDIsNDAzLDQwNCw0MDYsNDA3LDQwOCw0MDksNDExLDQxMiw0MTYsNDE3LDQxOSw'+
        '0MjAsNDIxLDQyMiw0MjMsNDI0LDQyNSw0MjYsNDI3LDQzNSw0MzYsNDQ1LDQ5NSw0OTcsNTAwLDUwMSw1MDIsNTE3LDUxOCw1'+
        'MTksNTIwLDUyMSw1MjIsNTIzLDUyNCw1MjUsNTI2LDU1MiwyMzUsMjQ0LDU2NSw1OTMsNTkyLDU5NCw1OTYsNjE5LDYyMCw2M'+
        'jEsNjIyLDYyMyw2MjQsNjI1LDYyNiw1MTMsNTY5LDU3MCw1NzEsNTcyLDU1Nyw1NzMsNTc1LDY4LDY0OSw2MzQsNjM1LDYzNi'+
        'w2MzcsNjM4LDYzOSw2NDIsNTYyLDU4NCw1NzQsNjUyLDY2Miw2NjEsMjA4LDIxMCw2NTYsMjA5LDY1MSw2NTQsNjY0LDY3MCw'+
        '2NzUsNjY2LDY3LDY1Myw2NzEsNjcyLDY3Myw2NzQsNjU3LDY2OCw2NjksNjYwLDY2NSw2NjcsNTg5LDY3OSw2OTEsNTkxLDU4'+
        'OCw2NSw2OTAsNjU1LDY4NCw2ODUsMjAzLDIwNCw1NjYsNTY3LDU2OCwzMCwzMiwzNiwzNywzOCw2NDMsMjk1LDEzNiwxMzEsMT'+
        'MwLDEzMiwxMjgsMTM0LDEyOSwxMzcsMTM4LDEzNSwxMDAzLDEwMDQsMTAwNSwxMDA2LDEwMDcsMTAwOCwyMDMsMjA0LDEyNy'+
        'wxMzMsNzAwLDEwMDAsNjUwLDY2MSw2NzAsNjc1LDY1Myw2NjQsNjY1LDY2Niw2NjcsNjY4LDY2OSw2NzAsNjc1LDY1Nyw2Nyw'+
        '2NTUsMjY2LDQzLDY1OSwyMiw0MywxMDAwLDEwMDEsNjU0LDU5Miw1NzUifX0.uHa1Snn1SmlLyMyBQjIiYrzEobQ_VojXEjQUP'+
        'vs6HFYIVKYR9wnKQD8NGdE4yAlaaTwupdkq5GuhwgR134LpJV9D-JJb_as5z_XaDaPzPzbrt5oCKdQGmmd84eTPbWoJnVmqhdDc1'+
        '4EDNJ7oRB4b6qZTlqha_XJpF7ncWBvobtdxwXy2mmpdaLWDbN26AVFCfacLBPNjEqSqsNirAK1H67mnGcdKqOpWQfN8LdmG'+
        'qkeRRL-p-RHZ7qEUfmttAsPyx5M2a0kWDjk3Pm9swLVYTq7qaB7iQIdeqUXTlXwC8Pw7ojpHgZhZoiwruXM31wRmE8-o3cdk5-b-t5XMSa7WnA',
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


    static readonly token: IToken = {
        type:'Bearer',
        accessToken: 'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJFWDQ4Njg0NyIsImlhdCI6MTY4MTMzNTk3MywiZXhwIjoxNjgx'+
        'MzM5NTczLCJ1c2VyIjp7ImlkVXN1YXJpbyI6IlZJOVhYV1giLCJub21icmVVc3VhcmlvIjoiQUxFSkFORFJPIERFIEpFU1V'+
        'TIFZFTlRVUkEgTUFSVElORVoiLCJpZEdydXBvIjoiQ0FDIiwibnVtZXJvRW1wbGVhZG8iOiJFWDQ4Njg0NyIsImZ1ZXJ6YVZ'+
        'lbnRhIjpudWxsLCJpcCI6IjE5Mi4xNjguMS4xMDMiLCJuaXZlbEZ1ZXJ6YVZlbnRhIjpudWxsLCJwb3NpY2lvbiI6IlYzNiI'+
        'sInRlbGVmb25vIjowLCJjbGF2ZVVzdWFyaW9EaXN0cmlidWlkb3IiOm51bGwsInRpcG8iOiJDQUMiLCJlc3RhdHVzIjpudWxsL'+
        'CJ1dWlkIjoiZDJmMDVmZmEtNTE1NS00ZGI5LTk5NjItMzUyZDE2MzE2MGQ1IiwicmVnaW9uIjoiUHVlYmxhIiwiY2VudHJvIjoiQ'+
        '0FDIFBBUlFVRSBQVUVCTEEiLCJpZFJlZ2lvbiI6NywibnVtQ2FqYSI6OTAsIm9maWNpbmFWZW50YXMiOiJNNzk0IiwiaWRDZW50c'+
        'm8iOiI5NDMiLCJwZXJtaXNvcyI6IjEsMiwzLDQsNSw2LDcsOCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwyMCwyMSwyMiwyMywyNCwy'+
        'NSwyNywyOCwyOSwzOSw0MCw0MSw0Miw0Myw1MSw1Miw1Myw2Miw2Myw2NSw2Niw4Myw4NCw4NSw4Nyw4OCw4OSw5MSw5Miw5Myw5OCw5'+
        'OSwxMDEsMTAyLDEwMywxMDUsMTA3LDEwOCwxMDksMTEzLDExNCwxMTUsMTE5LDEyMSwxMjIsMTIzLDEyNCwxMjUsMTI2LDEzOSwxNDAsMT'+
        'YyLDE2MywxNzUsMTc2LDE4NCwxODUsMTg3LDE4OCwyMjQsMjI1LDIyNiwyMjgsMjI5LDIzMCwyMzQsMjM2LDI0NiwyNDcsMjYyLDI2My'+
        'wyNjQsMjY1LDI2NiwyNjcsMjY4LDI2OSwyNzAsMjcxLDI3MiwyNzMsMjc0LDI3NiwyNzcsMjc4LDI3OSwyODAsMjgxLDI4MiwyODMsMj'+
        'g3LDI4OCwyOTMsMjk0LDM0MSwzNDIsMzQ2LDM0NywzNDgsMzQ5LDM1NywzNjksMzkyLDQwMiw0MDMsNDA0LDQwNiw0MDcsNDA4LDQwOS'+
        'w0MTEsNDEyLDQxNiw0MTcsNDE5LDQyMCw0MjEsNDIyLDQyMyw0MjQsNDI1LDQyNiw0MjcsNDM1LDQzNiw0NDUsNDk1LDQ5Nyw1MDAsNTA'+
        'xLDUwMiw1MTcsNTE4LDUxOSw1MjAsNTIxLDUyMiw1MjMsNTI0LDUyNSw1MjYsNTUyLDIzNSwyNDQsNTY1LDU5Myw1OTIsNTk0LDU5Niw2'+
        'MTksNjIwLDYyMSw2MjIsNjIzLDYyNCw2MjUsNjI2LDUxMyw1NjksNTcwLDU3MSw1NzIsNTU3LDU3Myw1NzUsNjgsNjQ5LDYzNCw2MzUsN'+
        'jM2LDYzNyw2MzgsNjM5LDY0Miw1NjIsNTg0LDU3NCw2NTIsNjYyLDY2MSwyMDgsMjEwLDY1NiwyMDksNjUxLDY1NCw2NjQsNjcwLDY3NS'+
        'w2NjYsNjcsNjUzLDY3MSw2NzIsNjczLDY3NCw2NTcsNjY4LDY2OSw2NjAsNjY1LDY2Nyw1ODksNjc5LDY5MSw1OTEsNTg4LDY1LDY5MCw'+
        '2NTUsNjg0LDY4NSwyMDMsMjA0LDU2Niw1NjcsNTY4LDMwLDMyLDM2LDM3LDM4LDY0MywyOTUsMTM2LDEzMSwxMzAsMTMyLDEyOCwxMzQsM'+
        'TI5LDEzNywxMzgsMTM1LDEwMDMsMTAwNCwxMDA1LDEwMDYsMTAwNywxMDA4LDIwMywyMDQsMTI3LDEzMyw3MDAsMTAwMCw2NTAsNjYxLD'+
        'Y3MCw2NzUsNjUzLDY2NCw2NjUsNjY2LDY2Nyw2NjgsNjY5LDY3MCw2NzUsNjU3LDY3LDY1NSwyNjYsNDMsNjU5LDIyLDQzLDEwMDAsMTA'+
        'wMSw2NTQsNTkyLDU3NSJ9fQ.RPgIqqt34lIqtRTpswOaxKeg5x8XREOApH5KzrEPJZHZinIBcMe2NKbZeVtnsAqORQU2mYIhK6ZLYRpmM3'+
        'AWY7d5FHSmdsWReRv1GN6Mief-Eh66jUUOAw8D524e15bt1hcmaU8Yc10bZYfYO_d_H2srS_Ms95EzIKSRsDT_1N_zLTulBHbPhhTOuPP9'+
        'kUDlviO37kc466ZNvVSgDUKe7jyR9_HnBDoK9j8bTsvGE1IdJoe2xCqvNRFsZAwys1cfHty74kxf57iEIOpQ0jpU-VnFoGuug3K9EyH'+
        '6ctTXc59ZrZpPe9z2BduYqXFHBR8tgkr_mlpYy6l4nT1PYXAd_A',
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
