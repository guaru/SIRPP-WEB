import { createReducer, on } from '@ngrx/store';
import  * as ReportMoveActions from '@sicatel/modules/reports/report-move/store/actions/report-move.actios';
import { IreportResponse } from '@sicatel/shared/models/report/report-move';
import { IreportRequest } from '@sicatel/shared/models/report/report-move';
import { IError } from '@sicatel/shared/models/request/error.interface';

export const  featureKey =  'reporMoveReducer';

export interface State {
   reportRequest: IreportRequest;
   loading: boolean;
   error: IError;
   reportResponse: IreportResponse;
};

export const initialState: State = {
   reportRequest: {} as IreportRequest,
   loading: false,
   error:  {} as IError,
   reportResponse: {} as IreportResponse
};

export const reporMoveReducer = createReducer(
initialState,
 on(ReportMoveActions.loadData, (state, {reportRequest}) => ({
    ...state,
    reportRequest,
    loading: true
 })),
 on(ReportMoveActions.loadSuccess, (state, {reportResponse}) => ({
    ...state,
    reportResponse,
    loading: false,
    error: {} as IError
 })),
 on(ReportMoveActions.loadFailure, (state,{error}) => ({
    ...state,
    reportRequest: {} as IreportRequest,
    reportResponse: {} as IreportResponse,
    loading: false,
    error
 }))
);
