import { createAction, props } from '@ngrx/store';
import { IConsultaOrdenRequest } from '@sicatel/shared/models/consulta-orden/consulta-orden-request.interface';
import { IOrdenDetailResponse } from '@sicatel/shared/models/consulta-orden/orden-detail-response.interface';
import { IError } from '@sicatel/shared/models/request/error.interface';

export const consultaOrden = createAction('[ConsultaOrden] Consulta orden bes ', props<{request: IConsultaOrdenRequest }>());

export const consultaOrdenSuccess =  createAction('[ConsultaOrden] Consulta orden success', props<{response: IOrdenDetailResponse}>());

export const consultaOrdenError =  createAction('[ConsultaOrden] Consulta orden faild', props<{error: IError}>());

export const consultaOrdenReset =  createAction('[ConsultaOrden] Consulta orden reset');

