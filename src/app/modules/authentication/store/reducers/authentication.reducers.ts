import { createReducer, on } from '@ngrx/store';
import * as AuthenticationActions from '@sicatel/modules/authentication/store/actions/authentication.actions';
import { Menu } from '@sicatel/shared/models/menu/menu.interface';
import { IError } from '@sicatel/shared/models/request/error.interface';
import { IUserRequest } from '@sicatel/shared/models/request/user.interface';
import { IUserResponse } from '@sicatel/shared/models/response/user.response';
import { IToken } from '@sicatel/shared/models/user/user';

export const  featureKey  =  'authenticationReducer';

export interface  State {
    userRequest: IUserRequest;
    loading: boolean;
    error: IError;
    userResponse: IUserResponse;
    token: IToken;
    menu: Array<Menu>;
    isAuthenticate: boolean;
}

export const initialState: State = {
    userRequest :  {} as IUserRequest,
    loading: false,
    error: {} as IError,
    userResponse: {} as IUserResponse,
    token: {} as IToken,
    menu:  [],
    isAuthenticate: false
};

export const authenticationReducer = createReducer(
initialState,
 on(AuthenticationActions.signIn, (state, {userRequest}) => ({
    ...state,
    userRequest,
    loading: true
 })),
 on(AuthenticationActions.signInSuccess, (state,{userResponse}) => ({
    ...state,
    loading: false,
    userRequest: {} as IUserRequest,
    userResponse,
    error: {}  as IError
 })),
 on(AuthenticationActions.signInFailure, (state,{error}) => ({
    ...state,
    loading: false,
    userRequest: {} as IUserRequest,
    userResponse: {} as IUserResponse,
    error
 })),
 on(AuthenticationActions.setToken, (state,{token}) => ({
   ...state,
   token,
   isAuthenticate: true,
   userResponse: {} as IUserResponse
 })),
 on(AuthenticationActions.isAuthenticate, (state) => ({
   ...state
 })),
 on(AuthenticationActions.signOff, (state) => ({
   ...state,
   token: {} as IToken,
   isAuthenticate: false
 })),
 on(AuthenticationActions.loadMenu, (state) => ({
  ...state,
  loading: true,
  menu: []
 })),
 on(AuthenticationActions.loadMenuSuccess, (state,{menu}) => ({
  ...state,
  loading: false,
  menu
 })),
 on(AuthenticationActions.loadMenuFailure, (state) => ({
  ...state,
  loading: false,
  menu: []
 }))
 );
