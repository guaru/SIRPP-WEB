import { createAction, props } from '@ngrx/store';
import { IReportResponse } from '@sicatel/shared/models/report/report-move';
import { IReportRequest } from '@sicatel/shared/models/report/report-move';
import { IError } from '@sicatel/shared/models/request/error.interface';


export const loadData = createAction('[ReporMove] Load Data ',props<{reportRequest: IReportRequest}>());

export const loadSuccess = createAction('[ReporMove] Load Data Success ', props<{reportResponse:  IReportResponse}>());

export const loadFailure = createAction('[ReporMove] Load Data Failure ', props<{ error: IError }>());
