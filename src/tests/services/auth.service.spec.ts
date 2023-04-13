import { TestBed, waitForAsync } from "@angular/core/testing";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { AuthService } from "@sicatel/core/services/auth.service";
import * as fromAuthentication from '@sicatel/modules/authentication/store/reducers/authentication.reducers';
import { AuthenticationTestConstants } from "../configs/authentication-test.constants";
import { IUserResponse } from "@sicatel/shared/models/response/User.response";


describe('AuthService', () =>{
    let store: MockStore<fromAuthentication.State>;
    let service : AuthService;
    beforeEach(waitForAsync(() =>{
         TestBed.configureTestingModule({
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
    }));


    afterEach(() =>{
        jest.clearAllMocks();
    });


    it('should be created', () =>{
        expect(service).toBeTruthy();
    });

    it('should be signin success', ()=>{
        const writeTokenSpy =  jest.spyOn(AuthService.prototype as any,'writeToken');
        const existTokenSpy =  jest.spyOn(AuthService.prototype as any,'existToken');
        service.signIn(AuthenticationTestConstants.userResponse);
        expect(writeTokenSpy).toHaveBeenCalled();
        expect(existTokenSpy).toHaveBeenCalled();
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

    it('should be signOff', ()=>{
        const removeItem =  jest.spyOn(localStorage,'removeItem');
        service.signOff();
        expect(removeItem).toHaveBeenCalled();
    });
    

});