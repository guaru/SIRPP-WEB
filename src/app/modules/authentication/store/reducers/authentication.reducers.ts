import { createReducer, on } from '@ngrx/store';
import { IError } from '@sicatel/shared/models/request/error.interface';
import { IUserRequest } from '@sicatel/shared/models/request/user.interface';
import * as AuthenticationActions from '@sicatel/modules/authentication/store/actions/authentication.actions';
import { IUserResponse } from '@sicatel/shared/models/response/User.response';
import { IToken } from '@sicatel/shared/models/user/User';

export const  featureKey  =  'authenticationReducer';


export interface  State{
    userRequest: IUserRequest,
    loading: boolean,
    error: IError
    userResponse: IUserResponse,
    token: IToken,
    isAuthenticate: boolean
}

export const initialState: State = {
    userRequest :  {} as IUserRequest,
    loading: false,
    error: {} as IError,
    userResponse: {} as IUserResponse,
    token: {} as IToken,
    isAuthenticate: false
};

export const authenticationReducer = createReducer(
initialState,
 on(AuthenticationActions.signIn, (state, {userRequest}) => ({
    ...state,
    userRequest: userRequest,
    loading: true
 })),
 on(AuthenticationActions.signInSuccess, (state,{userResponse}) => ({
    ...state,
    loading: false,
    userRequest: {} as IUserRequest,
    userResponse: userResponse,
    error: {}  as IError
 })),
 on(AuthenticationActions.signInFailure, (state,{error}) => ({
    ...state,
    loading: false,
    userRequest: {} as IUserRequest,
    userResponse: {} as IUserResponse,
    error: error
 })),
 on(AuthenticationActions.setToken, (state,{token}) => ({
   ...state,
   token: token,
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
 }))
 );