import { SicatelCommons } from '@sicatel/configs/commons.constants';
import { TypeCsComplemento } from '@sicatel/shared/enums/type-cs-complement';
import { IConsultaSaldoRequest } from '@sicatel/shared/models/consulta-saldo/consulta-saldo-request.interface';
import { ISaldo } from '@sicatel/shared/models/consulta-saldo/saldo.interface';
import { ISaldos } from '@sicatel/shared/models/consulta-saldo/saldos.interface';
import { IError } from '@sicatel/shared/models/request/error.interface';
import { StatusCodes } from 'http-status-codes';


export class ConsultaSaldoTestConstants {

    static readonly unexpectedError: IError = {
        code: 'RB-000',
        title: 'Unexpected Error',
        message: 'Unexpected Error',
        status: StatusCodes.IM_A_TEAPOT
    };

    static readonly saldo: ISaldos = {
        saldos: [{
            plataforma: SicatelCommons.bes,
            nombreCliente: 'JUAN PEDRO CORTEZ RIOS',
            saldoAPagar: '400.00',
            saldoEstimado: '400.00',
            saldoEstmAlDia: '400.00'
        }],
        has2Platforms: false,
        plataforma: SicatelCommons.bes

    };

    static readonly saldoWithResponsabilidadPago: ISaldos = {
        saldos: [{
            plataforma: SicatelCommons.bes,
            nombreCliente: 'JUAN PEDRO CORTEZ RIOS',
            saldoAPagar: '400.00',
            saldoEstimado: '400.00',
            saldoEstmAlDia: '400.00'
        }],
        cuentaResponsabilidadPago: '12312321',
        has2Platforms: false,
        plataforma: SicatelCommons.bes

    };


    static readonly saldoError: ISaldos = {
        saldos: [],
        has2Platforms: false,
        plataforma: '',
        error: true,
        message: 'Linea de otra compañia'

    };

    static readonly complemento: ISaldo = {
        plataforma: SicatelCommons.bes,
        nombreCliente: 'JUAN PEDRO CORTEZ RIOS',
        saldoAPagar: '400.00',
        saldoEstimado: '400.00',
        saldoEstmAlDia: '400.00'
    };

    static readonly filters: IConsultaSaldoRequest = {
        telefono: '0000000000',
        plataforma: '',
        cuenta: '',
        region: 0
    };

    static readonly filtersComplemento: IConsultaSaldoRequest = {
        telefono: '0000000000',
        plataforma: '',
        cuenta: '',
        region: 0,
        typeCs: TypeCsComplemento.FACTURACION
    };

}
