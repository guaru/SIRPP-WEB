import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromAuthenticacion, AuthenticationSelector, AuthenticationActions } from '@sicatel/modules/authentication/store/index';
import { IUserRequest } from '@sicatel/shared/models/request/user.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'sicatel-authentication-container',
  templateUrl: './authentication.container.html',
  styleUrls: ['./authentication.container.scss']
})
export class AuthenticationContainer {

  loading$: Observable<boolean>;
  constructor(private store: Store<fromAuthenticacion.State>) {
    this.loading$ = this.store.select(AuthenticationSelector.selectAuthenticationStateLoading);
  }

  login(userRequest: IUserRequest): void {
    this.store.dispatch(AuthenticationActions.signIn({ userRequest }));
  }

}


