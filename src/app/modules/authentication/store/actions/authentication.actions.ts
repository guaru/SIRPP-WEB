import { createAction, props } from '@ngrx/store';
import { IError } from '@sicatel/shared/models/request/error.interface';
import { IUserRequest } from '@sicatel/shared/models/request/user.interface';
import { IUserResponse } from '@sicatel/shared/models/response/User.response';
import { IToken } from '@sicatel/shared/models/user/User';


export const isAuthenticate =  createAction('[Authentication] is authenticate ');

export const signIn =  createAction('[Authentication] signIn ', props<{userRequest: IUserRequest}>());

export const signInSuccess =  createAction('[Authentication] signIn Success ', props<{userResponse: IUserResponse}>());

export const signInFailure =  createAction('[Authentication] signIn Failure ', props<{error: IError}>());

export const setToken =  createAction('[Authentication] set Token ', props<{token: IToken}>());

export const signOff =  createAction('[Authentication] signOff');