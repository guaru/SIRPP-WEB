import { createReducer, on } from '@ngrx/store';
import { SicatelCommons } from '@sicatel/configs/commons.constants';
import { UtilsObjects } from '@sicatel/core/services/utils/utils-objects.service';
import * as ConsultaSaldoActions from '@sicatel/modules/consulta-saldo/store/actions/consulta-saldo.actions';
import { IConsultaSaldoRequest } from '@sicatel/shared/models/consulta-saldo/consulta-saldo-request.interface';
import { ISaldo } from '@sicatel/shared/models/consulta-saldo/saldo.interface';
import { ISaldos } from '@sicatel/shared/models/consulta-saldo/saldos.interface';
import { IError } from '@sicatel/shared/models/request/error.interface';

export const featureKey = 'consultaSaldoReducer';

export interface State {
    request: IConsultaSaldoRequest;
    saldos: ISaldos;
    error: IError;
    loading: boolean;
    saldoComplemento: ISaldo;
    enabledRegion: boolean;
    enabledCs: boolean;
    enabledPay: boolean;
}

export const initialState: State = {
    request: {} as IConsultaSaldoRequest,
    saldos: {
        plataforma: '',
        saldos: [
            {
                plataforma: ''
            } as ISaldo
        ]
    } as ISaldos,
    error: {} as IError,
    saldoComplemento: {} as ISaldo,
    loading: false,
    enabledRegion: false,
    enabledPay: false,
    enabledCs: false
};

export const consultaSaldoReducer = createReducer(
    initialState,
    on(ConsultaSaldoActions.consultaSaldo, (state, request) => ({
        ...state,
        request: request.request,
        loading: true
    })),
    on(ConsultaSaldoActions.consultaSaldoSuccess, (state, response) => ({
        ...state,
        saldos: response.saldos,
        loading: false,
        enabledRegion: false,
        enabledCs: false,
        enabledPay: !response.saldos.error
    })),
    on(ConsultaSaldoActions.consultaSaldoFaild, (state, error) => ({
        ...state,
        saldos: {
            plataforma: '',
            saldos: [
                {
                    plataforma: ''
                } as ISaldo
            ]
        } as ISaldos,
        loading: false,
        enabledRegion: error.error.code === SicatelCommons.codeRegionLineaNotFound,
        error: error.error,
        enabledCs: true,
        enabledPay: false
    })),
    on(ConsultaSaldoActions.consultaComplemento, (state, request) => ({
        ...state,
        loading: true,
        request: request.request
    })),
    on(ConsultaSaldoActions.consultaComplementoSuccess, (state, response) => ({
        ...state,
        loading: false,
        saldos: {
            saldos: UtilsObjects.csPrepareComplementos(state.saldos.saldos!,response.saldo)
        },
        saldoComplemento: response.saldo
    })),
    on(ConsultaSaldoActions.consultaComplementoFaild, (state, error) => ({
        ...state,
        loading: false,
        saldoComplemento: {} as ISaldo,
        error: error.error
    })),
    on(ConsultaSaldoActions.consultaSaldoDisabledConsulta, (state) => ({
        ...state,
        enabledCs: false
    })),
    on(ConsultaSaldoActions.consultaComplemento, (state, request) => ({
        ...state,
        loading: true,
        request: request.request
    })),
    on(ConsultaSaldoActions.consultaSaldoReset, (state) => ({
        ...state,
        saldos: {
            plataforma: '',
            saldos: [
                {
                    plataforma: ''
                } as ISaldo
            ]
        } as ISaldos,
        loading: false,
        error: {} as IError,
        request: {} as IConsultaSaldoRequest,
        saldoComplemento: {} as ISaldo,
        enabledRegion: false,
        enabledCs: true,
        enabledPay: false
    }))
);
