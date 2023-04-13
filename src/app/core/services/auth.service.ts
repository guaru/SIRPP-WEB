import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { SicatelCommons } from "@sicatel/configs/commons.constants";
import { IUserResponse } from "@sicatel/shared/models/response/User.response";
import { IToken } from '@sicatel/shared/models/user/User';
import * as fromAuthentication from '@sicatel/modules/authentication/store/reducers/authentication.reducers';
import * as AuthenticationActions from '@sicatel/modules/authentication/store/actions/authentication.actions';
import { IError } from "@sicatel/shared/models/request/error.interface";
import { SicatelMessages } from "@sicatel/configs/messsages.constant";

@Injectable({
     providedIn: 'root'
})
export class AuthService {

    private  _tokenKey: string = 'token';
    private  _typeKey: string = 'type';

    constructor(private store:Store<fromAuthentication.State>){
        
    }

    public signIn(user: IUserResponse){
        let _token = this.parseToken(user.accessToken);
        if(_token != undefined && _token.user){
            this.writeToken(user.accessToken,user.type);
            this.existToken();
        }else{
            this.store.dispatch(AuthenticationActions.signInFailure({error : SicatelMessages.errorGeneral }));
        }
    }

    public  isAuthenticate(): boolean {
         let _token = this.readToken();
          const expired = this.isExpiredToken(_token)
        if(_token !== undefined && _token !== null && _token.user  &&  !expired){
          return true;  
        }
        return false;
    }

    public existToken(): void {
        if(this.isAuthenticate()){
            this.store.dispatch(AuthenticationActions.setToken({token: this.readToken()}));
        }else{
            localStorage.removeItem(this._tokenKey);
            localStorage.removeItem(this._typeKey);
        }
    }

    public signOff(){
        localStorage.removeItem(this._tokenKey);
        localStorage.removeItem(this._typeKey);
    }

    private  readToken(): IToken{
        let _tokenString : string | null = localStorage.getItem(this._tokenKey);
        return  this.parseToken(_tokenString||"");
    }

    private writeToken(token: string, type: string): void{
        localStorage.setItem(this._tokenKey, token);
        localStorage.setItem(this._typeKey, type);
    }

    private parseToken(token: string): IToken {
        let _token: IToken = {} as IToken;
        if(token === undefined || token === "") return _token;
        let values: string[]  =  token.split(SicatelCommons.PUNTO);
        if(values.length > 2){
            let obj = window.atob(values[1]);
            _token =  JSON.parse(obj) as IToken;
        }
        return  _token;
    }

    private isExpiredToken(token: IToken): boolean {
        let now =  new Date().getTime() / 1000;
        if(token.exp < now){
          return true;
        }
        return false;
    }
}