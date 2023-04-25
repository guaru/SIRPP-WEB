import { createReducer, on } from '@ngrx/store';
import  * as CarouselActions from '@sicatel/modules/carousel/store/actions/carousel.actios';
import { IError } from '@sicatel/shared/models/request/error.interface';
import { ISliderConfig } from '@sicatel/shared/models/slider/slider-config.interface';
import { ISlider } from '@sicatel/shared/models/slider/slider.interface';

export const  featureKey =  'carouselReducer';

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

export const carouselReducer = createReducer(
initialState,
 on(CarouselActions.init, (state,{setting}) => ({
        ...state,
        loadings:false,
        setting
    })),
 on(CarouselActions.loadData, (state) => ({
    ...state,
    loadings: true,
    error: {} as IError
 })),
 on(CarouselActions.loadSuccess, (state,{data}) => ({
    ...state,
    loadings: false,
    data,
    error: {} as IError
 })),
 on(CarouselActions.loadFailure, (state,{error}) => ({
    ...state,
    loadings: false,
    data: [],
    error
 }))
);
