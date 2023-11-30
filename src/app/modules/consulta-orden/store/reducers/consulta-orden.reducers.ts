import { createReducer, on } from '@ngrx/store';
import { ConsultaOrdenActions } from '@sicatel/modules/consulta-orden/store';
import { IConsultaOrdenRequest } from '@sicatel/shared/models/consulta-orden/consulta-orden-request.interface';
import { IOrdenDetailResponse } from '@sicatel/shared/models/consulta-orden/orden-detail-response.interface';
import { IError } from '@sicatel/shared/models/request/error.interface';

export const featureKey = 'consultaOrdenReducer';

export interface State {
    loading: boolean;
    error: IError;
    request: IConsultaOrdenRequest;
    response: IOrdenDetailResponse;
};

export const initialState: State = {
    request: {} as IConsultaOrdenRequest,
    loading: false,
    error: {} as IError,
    response: {} as IOrdenDetailResponse
};

export const consultaOrdenReducer = createReducer(
    initialState,
    on(ConsultaOrdenActions.consultaOrden, (state, request) => ({
        ...state,
        request: request.request,
        loading: true
    })),
    on(ConsultaOrdenActions.consultaOrdenSuccess, (state, resposen) => ({
        ...state,
        loading: false,
        response: resposen.response,
        error: {} as IError
    })),
    on(ConsultaOrdenActions.consultaOrdenError, (state, error) => ({
        ...state,
        error: error.error,
        loading: false,
        response: {} as IOrdenDetailResponse
    })));
