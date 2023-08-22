import { createAction, props } from '@ngrx/store';
import { Menu } from '@sicatel/shared/models/menu/menu.interface';
import { IError } from '@sicatel/shared/models/request/error.interface';

export const loadMenu = createAction(
    '[Authentication] Load Menu'
);

export const loadMenuSuccess = createAction(
    '[Authentication] Load Menu Success',
    props<{ menu: Array<Menu> }>()
);

export const loadMenuFailure = createAction(
    '[Authentication] Load Menu Failed',
    props<{ error: IError }>()
);
