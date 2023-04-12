import * as fromAuthentication from '@sicatel/modules/authentication/store/reducers/authentication.reducers';
import * as AuthenticationActions from '@sicatel/modules/authentication/store/actions/authentication.actions';
import { AuthenticationTestConstants } from '@sicatel/tests/configs/authentication-test.constants';
import { IUserRequest } from '@sicatel/shared/models/request/user.interface';
import { IToken } from '../../../../../app/shared/models/user/User';

describe('Authentication Reducer', () =>{

    let customState: fromAuthentication.State;

    describe('SignIn user', ()=>{

        beforeEach(()=>{
            customState = {...fromAuthentication.initialState};
        });

        afterEach(() =>{
            customState =  {...fromAuthentication.initialState};
        });

        it('Should signin previus state',() => {
            const result =  fromAuthentication.authenticationReducer(fromAuthentication.initialState,AuthenticationActions.signIn({userRequest: AuthenticationTestConstants.userRequest}));
            customState.loading = true;
            customState.userRequest = AuthenticationTestConstants.userRequest;
            expect(result).toEqual(customState);
        });

        it('Should sigin success',() =>{
            const result =  fromAuthentication.authenticationReducer(fromAuthentication.initialState, AuthenticationActions.signInSuccess({userResponse: AuthenticationTestConstants.userResponse}));
            customState.loading = false;
            customState.userResponse = AuthenticationTestConstants.userResponse;
            customState.userRequest = {} as IUserRequest;
            expect(result).toEqual(customState);
        });

        it('Should sigin error',() =>{
            const result =  fromAuthentication.authenticationReducer(fromAuthentication.initialState, AuthenticationActions.signInFailure({error:AuthenticationTestConstants.error}));
            customState.loading =  false;
            customState.error = AuthenticationTestConstants.error;
            expect(result).toEqual(customState);
        });

     

        it('Should setToken',()=>{
            const result =  fromAuthentication.authenticationReducer(fromAuthentication.initialState, AuthenticationActions.setToken({token: AuthenticationTestConstants.token}));
            customState.token =  AuthenticationTestConstants.token;
            customState.isAuthenticate = true;
            expect(result).toEqual(customState);
        });

        it('Should is Authenticate ',()=>{
            const result =  fromAuthentication.authenticationReducer(fromAuthentication.initialState, AuthenticationActions.isAuthenticate());
            customState.isAuthenticate = false;
            expect(result).toEqual(customState);
        });


        it('Should signOff', () => {
            const result =  fromAuthentication.authenticationReducer(fromAuthentication.initialState, AuthenticationActions.signOff());
            expect(result).toEqual(customState);
        })


    })
});