import { HttpClientModule } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, Store } from '@ngrx/store';
import { SicatelUrlsConstants } from '@sicatel/configs/urls.constants';
import { LoginService } from '@sicatel/core/http/login/login.service';
import { AuthService } from '@sicatel/core/services/auth.service';
import { UtilsService } from '@sicatel/core/services/utils/utils.service';
import * as AuthenticationActions from '@sicatel/modules/authentication/store/actions/authentication.actions';
import { AuthenticationEffects } from '@sicatel/modules/authentication/store/effects/authentication.effects';
import { AuthenticationTestConstants } from '@sicatel/tests/configs/authentication-test.constants';
import { MockProvider } from 'ng-mocks';
import { Observable, of, throwError } from 'rxjs';

describe('Authentication Effects', () => {
  const httpLoginServiceSpy = { signIn: jest.fn(), loadMenu: jest.fn() };
  const authServiceSpy = { signIn: jest.fn(), signOff: jest.fn(), setTokenIsAuthenticated: jest.fn() };
  const utilServiceSpy = { showErrorMessage: jest.fn() };
  const routerSpy = { navigate: jest.fn() };
  const storeSpy = { dispatch: jest.fn() };
  let actions$: Observable<Action>;
  let effects: AuthenticationEffects;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        AuthenticationEffects,
        MockProvider(Router, routerSpy),
        provideMockActions(() => actions$),
        {
          provide: LoginService,
          useValue: httpLoginServiceSpy
        },
        {
          provide: UtilsService,
          useValue: utilServiceSpy
        },
        {
          provide: AuthService,
          useValue: authServiceSpy
        }, {
          provide: Store,
          useValue:  storeSpy
        }
      ]
    });
    effects = TestBed.inject(AuthenticationEffects);
  }));

  it('Should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('SignIn actions', () => {
    it('should dispatch a success effect', () => {
      actions$ = of(AuthenticationActions.signIn({ userRequest: AuthenticationTestConstants.userRequest }));
      httpLoginServiceSpy.signIn.mockReturnValue(of(AuthenticationTestConstants.userResponse));

      effects.signIn$.subscribe(action => {
        expect(httpLoginServiceSpy.signIn.mock.calls.length).toBe(1);
        expect(action).toEqual(AuthenticationActions.signInSuccess({ userResponse: AuthenticationTestConstants.userResponse }));
      });
    });

    it('Should dispatch a error signin', () => {
      actions$ = of(AuthenticationActions.signIn({ userRequest: AuthenticationTestConstants.userRequest }));
      httpLoginServiceSpy.signIn.mockReturnValue(throwError(() => AuthenticationTestConstants.error));

      effects.signIn$.subscribe(action => {
        expect(httpLoginServiceSpy.signIn.mock.calls.length).toBe(2);
        expect(action).toEqual(AuthenticationActions.signInFailure({ error: AuthenticationTestConstants.error }));
      });
    });

    it('Should dispatch success auth ', () => {
      actions$ = of(AuthenticationActions.signInSuccess({ userResponse: AuthenticationTestConstants.userResponse }));
      effects.signInSuccess$.subscribe(action => {
        expect(authServiceSpy.signIn).toBeCalled();
      });
    });

    it('Should dispatch faild auth ', () => {
      actions$ = of(AuthenticationActions.signInFailure({ error: AuthenticationTestConstants.error }));
      effects.actionFailure$.subscribe(action => {
        expect(utilServiceSpy.showErrorMessage).toBeCalled();
      });
    });

    it('should dispatch signOff', () => {
      actions$ = of(AuthenticationActions.signOff());
      effects.signOff$.subscribe(action => {
        expect(authServiceSpy.signOff).toBeCalled();
        expect(routerSpy.navigate).toHaveBeenCalledWith([SicatelUrlsConstants.pathLogin]);
      });
    });

    it('should dispath is authenticated', () => {
      actions$ = of(AuthenticationActions.isAuthenticate());
      effects.isAuthenticate$.subscribe(action => {
        expect(authServiceSpy.setTokenIsAuthenticated).toBeCalled();
      });
    });

  });
});
