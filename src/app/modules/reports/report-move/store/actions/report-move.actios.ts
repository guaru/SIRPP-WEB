import { createAction, props } from '@ngrx/store';
import { IError } from '@sicatel/shared/models/request/error.interface';
import { IreportResponse } from '@sicatel/shared/models/report/report-move';
import { IreportRequest } from '@sicatel/shared/models/report/report-move';


export const loadData = createAction('[ReporMove] Load Data ',props<{reportRequest: IreportRequest}>());

export const loadSuccess = createAction('[ReporMove] Load Data Success ', props<{reportResponse:  IreportResponse}>());

export const loadFailure = createAction('[ReporMove] Load Data Failure ', props<{ error: IError }>());
