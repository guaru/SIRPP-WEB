import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SicatelCommons } from '@sicatel/configs/commons.constants';
import { LoginService } from '@sicatel/core/http/login/login.service';
import { AuthService } from '@sicatel/core/services/auth.service';
import { UtilsService } from '@sicatel/core/services/utils/utils.service';
import * as AuthenticationActions from '@sicatel/modules/authentication/store/actions/authentication.actions';
import { Menu } from '@sicatel/shared/models/menu/menu.interface';
import { IError } from '@sicatel/shared/models/request/error.interface';
import { IUserResponse } from '@sicatel/shared/models/response/user.response';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';

@Injectable()
export class AuthenticationEffects {

  signIn$ = createEffect(() => this.actions$.pipe(
    ofType(AuthenticationActions.signIn),
    exhaustMap(({ userRequest }) => this.loginService.signIn(userRequest).pipe(
      map((userResponse: IUserResponse) => AuthenticationActions.signInSuccess({ userResponse })),
      catchError((error: IError) => of(AuthenticationActions.signInFailure({ error })))
    ))));

  signInSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(AuthenticationActions.signInSuccess),
    tap(({ userResponse }) => this.authService.signIn(userResponse))
  ), { dispatch: false });

  signInFailure$ = createEffect(() => this.actions$.pipe(
    ofType(AuthenticationActions.signInFailure),
    tap(({ error }) => { this.utilService.showErrorMessage(error); })
  ), { dispatch: false });

  isAuthenticate$ = createEffect(() => this.actions$.pipe(ofType(AuthenticationActions.isAuthenticate),
    tap(() => {
     this.authService.setTokenIsAuthenticated();
    })),{ dispatch: false });

  signOff$ = createEffect(() => this.actions$.pipe(ofType(AuthenticationActions.signOff),
    tap(() => {
      this.authService.signOff();
      this.router.navigate([SicatelCommons.pathLogin]);
    }))
    , { dispatch: false });

  loadMenu$ = createEffect(() => this.actions$.pipe(
      ofType(AuthenticationActions.loadMenu),
      exhaustMap(() => this.loginService.loadMenu().pipe(
        map((menu: Array<Menu>) => AuthenticationActions.loadMenuSuccess({menu})),
        catchError((error: IError) => of(AuthenticationActions.loadMenuFailure()))
      ))));

  constructor(private actions$: Actions, private loginService: LoginService,
    private utilService: UtilsService, private authService: AuthService, private router: Router) { }
}
