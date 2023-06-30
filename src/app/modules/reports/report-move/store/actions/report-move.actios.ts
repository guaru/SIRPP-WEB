import { createAction, props } from '@ngrx/store';
import { IError } from '@sicatel/shared/models/request/error.interface';
import { IreportMoveDetail } from '@sicatel/shared/models/report/report-move';
import { IReportRequest } from '@sicatel/shared/models/report/report-move';

export const init = createAction('[ReporMove] Init ');

export const loadData = createAction('[ReporMove] Load Data ',props<{userRequest: IReportRequest}>());

export const loadSuccess = createAction('[ReporMove] Load Data Success ', props<{data:  Array<IreportMoveDetail>}>());

export const loadFailure = createAction('[ReporMove] Load Data Failure ', props<{ error: IError }>());
