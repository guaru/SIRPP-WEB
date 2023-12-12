import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SicatelCommons } from '@sicatel/configs/commons.constants';
import { SicatelMessages } from '@sicatel/configs/messsages.constant';
import { SicatelUrlsConstants } from '@sicatel/configs/urls.constants';
import { UtilsService } from '@sicatel/core/services/utils/utils.service';
import * as AuthenticationActions from '@sicatel/modules/authentication/store/actions/authentication.actions';
import * as fromAuthentication from '@sicatel/modules/authentication/store/reducers/authentication.reducers';
import { IUserResponse } from '@sicatel/shared/models/response/user.response';
import { IToken } from '@sicatel/shared/models/user/user';

@Injectable({
    providedIn: 'root'
})
export class AuthService {


    constructor(private store: Store<fromAuthentication.State>, private utilService: UtilsService, private router: Router) { }

    /**
     * Authenticated logic for user
     *
     * @summary Make signIn, parse token
     * @param user:IUserResponse
     * @returns void
     */
    signIn(user: IUserResponse): void {
        const token = this.parseToken(user.accessToken);
        if (token!.user) {
            this.writeToken(user.accessToken, user.type);
            if (this.isAuthenticate()) {
                this.store.dispatch(AuthenticationActions.setToken({ token: this.readToken() }));
                this.router.navigate([SicatelUrlsConstants.pathDashboard]);
            }
        } else {
            this.store.dispatch(AuthenticationActions.signInFailure({ error: SicatelMessages.errorGeneral }));
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
        return (token!.user && !expired) ? true : false;
    }

    /**
     * Set token is authenticated user
     *
     * @summary  if user is authenticated save token in store state
     * @return void
     */
    setTokenIsAuthenticated(): void {
        if (this.isAuthenticate()) {
            this.store.dispatch(AuthenticationActions.setToken({ token: this.readToken() }));
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
            const token = this.parseToken(tokenString || '');
            if (token.user) {
                token.accessToken = tokenString;
            } else {
                throw new Error('Not Authenticated');
            }
            return token;
        } catch (e) {
            return {} as IToken;
        }
    }

    /**
     * Check is user contain with permission
     *
     * @param permision
     * @returns boolean
     */
    checkPermission(permision: string, alert: boolean): boolean {
        if (this.utilService.indexOfInArray(this.readToken().user.permisos.split(','), permision)) {
            return true;
        } else {
            if (alert) {
                this.utilService.showErrorMessage(SicatelMessages.errorForbidden);
            }
            return false;
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
        type = this.utilService.encrypt(type);
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
        if (token === undefined || token === '') { return parseToken; }
        const values: Array<string> = token.split(SicatelCommons.punto);
        if (values.length > 2) {
            const obj = window.atob(values[1]);
            parseToken = JSON.parse(obj) as IToken;
        }
        return parseToken;
    }

    /**
     * Expired token validation
     *
     * @summary Make validation token expired
     * @param token: IToken
     * @returns boolean
     */
    private isExpiredToken(token: IToken): boolean {
        const now = new Date().getTime() / 1000;
        return token.exp < now;
    }
}
