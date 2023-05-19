import { createAction, props } from '@ngrx/store';
import { IError } from '@sicatel/shared/models/request/error.interface';
import { ISliderConfig } from '@sicatel/shared/models/slider/slider-config.interface';
import { ISlider } from '@sicatel/shared/models/slider/slider.interface';


export const init = createAction('[Carousel] Init ', props<{setting: ISliderConfig }>());

export const loadData = createAction('[Carousel] Load Data ');

export const loadSuccess = createAction('[Carousel] Load Data Success ', props<{ data: Array<ISlider> }>());

export const loadFailure = createAction('[Carousel] Load Data Failure ', props<{ error: IError }>());
