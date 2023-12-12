import { createReducer, on } from '@ngrx/store';
import { ConsultaOrdenActions } from '@sicatel/modules/consulta-orden/store';
import { EStatusOrder } from '@sicatel/shared/enums/status-order.enum';
import { IConsultaOrdenRequest } from '@sicatel/shared/models/consulta-orden/consulta-orden-request.interface';
import { IOrdenDetailResponse } from '@sicatel/shared/models/consulta-orden/orden-detail-response.interface';
import { IError } from '@sicatel/shared/models/request/error.interface';

export const featureKey = 'consultaOrdenReducer';

export interface State {
    loading: boolean;
    error: IError;
    request: IConsultaOrdenRequest;
    response: IOrdenDetailResponse;
    enabledPayment: boolean;
};

export const initialState: State = {
    request: {} as IConsultaOrdenRequest,
    loading: false,
    error: {} as IError,
    response: {} as IOrdenDetailResponse,
    enabledPayment: false
};

export const consultaOrdenReducer = createReducer(
    initialState,
    on(ConsultaOrdenActions.consultaOrden, (state, request) => ({
        ...state,
        request: request.request,
        loading: true,
        enabledPayment: false
    })),
    on(ConsultaOrdenActions.consultaOrdenSuccess, (state, response) => ({
        ...state,
        loading: false,
        response: response.response,
        error: {} as IError,
        enabledPayment: response.response!.orderInvoice!.status === EStatusOrder.CREADA
    })),
    on(ConsultaOrdenActions.consultaOrdenError, (state, error) => ({
        ...state,
        error: error.error,
        loading: false,
        response: {} as IOrdenDetailResponse,
        enabledPayment: false
    })),
    on(ConsultaOrdenActions.consultaOrdenReset, (state, error) => ({
        ...state,
        request: {} as IConsultaOrdenRequest,
        loading: false,
        error: {} as IError,
        response: {} as IOrdenDetailResponse,
        enabledPayment: false
    })));
