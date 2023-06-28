import { TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SicatelCommons } from '@sicatel/configs/commons.constants';
import { AuthService } from '@sicatel/core/services/auth.service';
import * as fromAuthentication from '@sicatel/modules/authentication/store/reducers/authentication.reducers';
import { DashboardContainer } from '@sicatel/modules/dashboard/containers/dashboard.container';
import { IUserResponse } from '@sicatel/shared/models/response/user.response';
import { IToken } from '@sicatel/shared/models/user/user';
import { AuthenticationTestConstants } from '@sicatel/tests/configs/authentication-test.constants';


describe('AuthService', () =>{
    let store: MockStore<fromAuthentication.State>;
    let service: AuthService;
    let router: Router;

    beforeEach(waitForAsync(() =>{
         TestBed.configureTestingModule({
           imports : [
            RouterTestingModule.withRoutes(
              [{path: 'caja/dashboard', component: DashboardContainer} ]
            )
           ],
            providers: [
                provideMockStore({
                    initialState :  {
                        [fromAuthentication.featureKey] :  fromAuthentication.initialState
                    }
                })
            ]
         });

         service =  TestBed.inject(AuthService);
         store = TestBed.inject<MockStore<fromAuthentication.State>>(MockStore);
         router = TestBed.inject(Router);
    }));

    afterEach(() =>{
        jest.clearAllMocks();
    });

    it('should be created', () =>{
        expect(service).toBeTruthy();
    });

    it('should be signin success', ()=>{
        jest.spyOn(store, 'dispatch');
        const writeTokenSpy =  jest.spyOn(AuthService.prototype as any,'writeToken');
        const isAuthenticateSpy = jest.spyOn(AuthService.prototype as any,'isAuthenticate');
        const navigateSpy = jest.spyOn(router, 'navigate');

        service.signIn(AuthenticationTestConstants.userResponse);
        expect(writeTokenSpy).toHaveBeenCalled();
        expect(isAuthenticateSpy).toHaveBeenCalled();
        expect(store.dispatch).toBeCalled();
        expect(navigateSpy).toHaveBeenCalledWith([SicatelCommons.pathDashboard]);
    });

    it('should be is authenticated', ()=>{
        const readTokenSpy =  jest.spyOn(AuthService.prototype as any,'readToken');
        const expiredTokenSpy =  jest.spyOn(AuthService.prototype as any,'isExpiredToken');
        const isAuthenticate = service.isAuthenticate();
        expect(readTokenSpy).toHaveBeenCalled();
        expect(expiredTokenSpy).toHaveBeenCalled();
        expect(isAuthenticate).toEqual(true);
    });

    it('should be signin faild', ()=>{
        jest.spyOn(store, 'dispatch');
        service.signIn({} as IUserResponse);
        expect(store.dispatch).toBeCalled();
    });

    it('should be is not authenticated expired token', ()=>{
        service.signIn(AuthenticationTestConstants.userResponseInvalid);
        const isAuthenticate = service.isAuthenticate();
        expect(isAuthenticate).toEqual(false);
    });


    it('should be exception read token', ()=>{
        service.signOff();
        const token = service.readToken();
        expect(token).toEqual({} as IToken);
    });

    it('should be signOff', ()=> {
        const removeItem =  jest.spyOn(localStorage,'removeItem');
        service.signOff();
        expect(removeItem).toHaveBeenCalled();
    });

    it('should be set token is authenticated init app component', () => {
      jest.spyOn(store, 'dispatch');
      const isAuthenticateSpy = jest.spyOn(AuthService.prototype as any, 'isAuthenticate');
      isAuthenticateSpy.mockReturnValue(true);
      service.setTokenIsAuthenticated();
      expect(isAuthenticateSpy).toHaveBeenCalled();
      expect(store.dispatch).toBeCalled();
    });

});
