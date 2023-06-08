import { createReducer, on } from '@ngrx/store';
import  * as ReportMoveActions from '@sicatel/modules/reports/report-move/store/actions/report-move.actios';
import { IError } from '@sicatel/shared/models/request/error.interface';
import { ISliderConfig } from '@sicatel/shared/models/slider/slider-config.interface';
import { ISlider } from '@sicatel/shared/models/slider/slider.interface';

export const  featureKey =  'reporMoveReducer';

export interface State {
   setting: ISliderConfig;
   data: Array<ISlider>;
   loadings: boolean;
   error: IError;
};

export const initialState: State = {
    setting : {} as ISliderConfig,
    data: [],
    loadings: false,
    error:  {} as IError
};

export const reporMoveReducer = createReducer(
initialState,
 on(ReportMoveActions.init, (state) => ({
        ...state,
        loadings:false,
    })),
 on(ReportMoveActions.loadData, (state) => ({
    ...state,
    loadings: true,
    error: {} as IError
 })),
 on(ReportMoveActions.loadSuccess, (state) => ({
    ...state,
    loadings: false,
    error: {} as IError
 })),
 on(ReportMoveActions.loadFailure, (state,{error}) => ({
    ...state,
    loadings: false,
    data: [],
    error
 }))
);
