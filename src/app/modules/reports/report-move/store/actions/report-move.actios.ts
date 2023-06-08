import { createAction, props } from '@ngrx/store';
import { IError } from '@sicatel/shared/models/request/error.interface';
import { IreportMoveDetail } from '@sicatel/shared/models/report/report-move';
import { IUserRequest } from '@sicatel/shared/models/request/user.interface';

export const init = createAction('[ReporMove] Init ');

export const loadData = createAction('[ReporMove] Load Data ',props<{userRequest: IUserRequest}>());

export const loadSuccess = createAction('[ReporMove] Load Data Success ', props<{data:  Array<IreportMoveDetail>}>());

export const loadFailure = createAction('[ReporMove] Load Data Failure ', props<{ error: IError }>());
