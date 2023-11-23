import { createAction, props } from '@ngrx/store';
import { IConsultaSaldoRequest } from '@sicatel/shared/models/consulta-saldo/consulta-saldo-request.interface';
import { ISaldo } from '@sicatel/shared/models/consulta-saldo/saldo.interface';
import { ISaldos } from '@sicatel/shared/models/consulta-saldo/saldos.interface';
import { IError } from '@sicatel/shared/models/request/error.interface';

export const consultaSaldo =  createAction('[ConsultaSaldo] Consulta saldo telefono/cuenta', props<{request: IConsultaSaldoRequest}>());

export const consultaSaldoSuccess = createAction('[ConsultaSaldo] Consulta saldo success', props<{saldos: ISaldos}>());

export const consultaSaldoFaild = createAction('[ConsultaSaldo] Consulta saldo faild', props<{error: IError}>());

export const consultaSaldoReset = createAction('[ConsultaSaldo] Consulta saldo reset');

export const consultaSaldoDisabledConsulta = createAction('[ConsultaSaldo] Consulta saldo disabled consulta');

export const consultaComplemento = createAction('[ConsultaSaldo] Consulta complemento', props<{request: IConsultaSaldoRequest }>());

export const consultaComplementoSuccess = createAction('[ConsultaSaldo] Consulta comlemento success', props<{saldo: ISaldo}>());

export const consultaComplementoFaild = createAction('[ConsultaSaldo] Consulta comlemento faild', props<{error: IError}>());
