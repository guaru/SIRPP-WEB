import { createReducer, on } from '@ngrx/store';
import  * as ReportMoveActions from '@sicatel/modules/reports/report-move/store/actions/report-move.actios';
import { IReportResponse } from '@sicatel/shared/models/report/report-move';
import { IReportRequest } from '@sicatel/shared/models/report/report-move';
import { IError } from '@sicatel/shared/models/request/error.interface';

export const  featureKey =  'reporMoveReducer';

export interface State {
   reportRequest: IReportRequest;
   loading: boolean;
   error: IError;
   reportResponse: IReportResponse;
};

export const initialState: State = {
   reportRequest: {} as IReportRequest,
   loading: false,
   error:  {} as IError,
   reportResponse: {} as IReportResponse
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
    reportRequest: {} as IReportRequest,
    reportResponse: {} as IReportResponse,
    loading: false,
    error
 }))
);
