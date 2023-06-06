import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SicatelCommons } from '@sicatel/configs/commons.constants';
import { SicatelMessages } from '@sicatel/configs/messsages.constant';
import { UtilsService } from '@sicatel/core/services/utils/utils.service';
import * as AuthenticationActions from '@sicatel/modules/authentication/store/actions/authentication.actions';
import * as fromAuthentication from '@sicatel/modules/authentication/store/reducers/authentication.reducers';
import { IUserResponse } from '@sicatel/shared/models/response/user.response';
import { IToken } from '@sicatel/shared/models/user/user';
import { throwError } from 'rxjs';

@Injectable({
     providedIn: 'root'
})
export class AuthService {


    constructor(private store: Store<fromAuthentication.State>, private utilService: UtilsService){}

    /**
     * Authenticated logic for user
     *
     * @summary Make signIn, parse token
     * @param user:IUserResponse
     * @returns void
     */
     signIn(user: IUserResponse): void {
        const token = this.parseToken(user.accessToken);
        if(token!.user) {
            this.writeToken(user.accessToken,user.type);
            this.existToken();
        } else {
            this.store.dispatch(AuthenticationActions.signInFailure({error : SicatelMessages.errorGeneral }));
        }
    }

    /**
     * Validate user is authenticate
     *
     * @summary Make validation user is authentication
     * @returns boolean
     */
    isAuthenticate(): boolean {
        const token = this.readToken();
        const expired = this.isExpiredToken(token);
        return (token!.user  &&  !expired) ? true : false;
    }

    /**
     * Logic start session is token exist in session storage
     *
     * @summary Make start session is token exist in session storage
     * @returns void
     */
    existToken(): void {
        if(this.isAuthenticate()){
            this.store.dispatch(AuthenticationActions.setToken({token: this.readToken()}));
        }else{
            this.removeToken();
        }
    }

    /**
     * Close sessión
     *
     * @summary close session user
     * @returns void
     */
    signOff(): void {
      this.removeToken();
    }

    /**
     * Read token
     *
     * @summary Make read token from session storage
     * @returns Itoken
     */
    readToken(): IToken {
        try {
            const tokenString: string | null = this.utilService.decrypt(localStorage.getItem('token') || '');
            let token = this.parseToken(tokenString || '');
            if(token.user){
                token.accessToken =  tokenString;
            }else{
                throw new Error('Not Authenticated');
            }
            return token;
        } catch(e) {
            return { } as IToken;
        }
    }

    /**
     * write token
     *
     * @summary Make write token in sessionStorage
     * @param token: string
     * @param type: string
     */
    private writeToken(token: string, type: string): void {
        token = this.utilService.encrypt(token);
        type =  this.utilService.encrypt(type);
        localStorage.setItem('token', token);
        localStorage.setItem('type', type);
    }

    /**
     * Remove token
     *
     * @summary Make remove token from sessionStorage
     */
    private removeToken(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('type');
    }

    /**
     * Parse token string
     *
     * @summary Make parse token to IToken
     * @param token: string
     * @returns IToken
     */
    private parseToken(token: string): IToken {
        let parseToken: IToken = {} as IToken;
        if(token === undefined || token === '') {return parseToken;}
        const values: Array<string>  =  token.split(SicatelCommons.punto);
        if(values.length > 2){
            const obj = window.atob(values[1]);
            parseToken =  JSON.parse(obj) as IToken;
        }
        return  parseToken;
    }

    /**
     * Expired token validation
     *
     * @summary Make validation token expired
     * @param token: IToken
     * @returns boolean
     */
    private isExpiredToken(token: IToken): boolean {
        const now =  new Date().getTime() / 1000;
        return token.exp < now;
    }
}
