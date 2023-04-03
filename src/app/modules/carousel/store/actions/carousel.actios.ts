import { createAction, props } from '@ngrx/store';
import { IError } from '@sicatel/shared/models/request/error.interface';
import { SliderConfig } from '@sicatel/shared/models/slider/slider-config.interface';
import { Slider } from '@sicatel/shared/models/slider/slider.interface';


export const init = createAction('[Carousel] Init ', props<{setting: SliderConfig }>());

export const loadData = createAction('[Carousel] Load Data ');

export const loadSuccess = createAction('[Carousel] Load Data Success ', props<{ data: Slider[] }>());

export const loadFailure = createAction('[Carousel] Load Data Failure ', props<{ error: IError }>());