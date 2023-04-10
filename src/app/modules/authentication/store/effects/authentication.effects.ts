import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import * as AuthenticationActions from '@sicatel/modules/authentication/store/actions/authentication.actions';
import { LoginService } from '@sicatel/core/http/login/login.service';
import { IUserResponse } from '@sicatel/shared/models/response/User.response';
import { IError } from '@sicatel/shared/models/request/error.interface';
import { UtilsService } from '@sicatel/core/services/utils/utils.service';
import { AuthService } from '@sicatel/core/services/auth.service';
import { Router } from '@angular/router';
import { SicatelCommons } from '@sicatel/configs/commons.constants';

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
    tap(({ error }) => { this.utilService.showErrorMessage(error) })
  ), { dispatch: false });

  setToken$ = createEffect(() => this.actions$.pipe(ofType(AuthenticationActions.setToken),
    tap(({ token }) => { this.router.navigate([SicatelCommons.PATH_DASHBOARD]); }))
    , { dispatch: false });


  isAuthenticate$ = createEffect(() => this.actions$.pipe(ofType(AuthenticationActions.isAuthenticate),
    tap(() => { this.authService.existToken() }))
    , { dispatch: false });

  signOff$ = createEffect(() => this.actions$.pipe(ofType(AuthenticationActions.signOff),
    tap(() => {
      this.authService.signOff();
      this.router.navigate([SicatelCommons.PATH_LOGIN])
    }))
    , { dispatch: false });



  constructor(private actions$: Actions, private loginService: LoginService,
    private utilService: UtilsService, private authService: AuthService, private router: Router) { }
}