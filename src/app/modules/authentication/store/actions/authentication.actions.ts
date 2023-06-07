import { createAction, props } from '@ngrx/store';
import { Menu } from '@sicatel/shared/models/menu/menu.interface';
import { IError } from '@sicatel/shared/models/request/error.interface';
import { IUserRequest } from '@sicatel/shared/models/request/user.interface';
import { IUserResponse } from '@sicatel/shared/models/response/user.response';
import { IToken } from '@sicatel/shared/models/user/user';


export const isAuthenticate =  createAction('[Authentication] is authenticate ');

export const signIn =  createAction('[Authentication] signIn ', props<{userRequest: IUserRequest}>());

export const signInSuccess =  createAction('[Authentication] signIn Success ', props<{userResponse: IUserResponse}>());

export const signInFailure =  createAction('[Authentication] signIn Failure ', props<{error: IError}>());

export const setToken =  createAction('[Authentication] set Token ', props<{token: IToken}>());

export const signOff =  createAction('[Authentication] signOff');

export const loadMenu = createAction('[Authentication] Load Menu');

export const loadMenuSuccess = createAction('[Authentication] Load Menu Success', props<{menu: Array<Menu>}>());

export const loadMenuFailure = createAction('[Authentication] Load Menu Failed');
