import { Component } from '@angular/core';
import {  Store } from '@ngrx/store';
import * as AuthenticationActions from '@sicatel/modules/authentication/store/actions/authentication.actions';
import * as fromAuthentication from '@sicatel/modules/authentication/store/reducers/authentication.reducers';
import * as AuthenticationSelectors from '@sicatel/modules/authentication/store/selectors/authentication.selectors';
import { IUser } from '@sicatel/shared/models/user/user';
import { Observable } from 'rxjs';


@Component({
    selector: 'sicatel-app-layout',
    templateUrl: './app.layout.html',
    styleUrls: [ './app.layout.scss' ]
})
export class AppLayoutComponent {

    user$: Observable<IUser>;

    constructor(private store: Store<fromAuthentication.State>){
        this.user$ =  this.store.select(AuthenticationSelectors.selectAuthenticationStateUser);
    }

    signOff(){
        this.store.dispatch(AuthenticationActions.signOff());
    }


}
