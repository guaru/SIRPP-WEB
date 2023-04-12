import * as fromAuthentication from '@sicatel/modules/authentication/store/reducers/authentication.reducers';
import * as AuthenticationSelectors from '@sicatel/modules/authentication/store/selectors/authentication.selectors';
import { IToken, IUser } from '@sicatel/shared/models/user/User';


describe('Authentication selectors', () => {
 it('Should select  authentication', () => {
      const result = AuthenticationSelectors.selectAuthenticationState({
        [fromAuthentication.featureKey] :  fromAuthentication.initialState
      });
      expect(result).toBeTruthy();
  }),
  it('Should select loading authentication', () => {
    const result = AuthenticationSelectors.selectAuthenticationStateLoading({
      [fromAuthentication.featureKey] :  fromAuthentication.initialState
    });
    expect(result).toEqual(false);
 })

 it('Should select user authentication', () => {
    const result = AuthenticationSelectors.selectAuthenticationStateUser({
      [fromAuthentication.featureKey] :  {
         ...fromAuthentication.initialState,
         token: {
            accessToken: 'aksmndgajksdjkadadk',
            user : { idUsuario:'VXXXXXX'} as IUser
         } as IToken
      }
    });
    expect(result.idUsuario).toEqual('VXXXXXX');
 })

 it('Should select user authentication empty', () => {
    const result = AuthenticationSelectors.selectAuthenticationStateUser({
      [fromAuthentication.featureKey] : fromAuthentication.initialState
      
    });
    expect(result).toBeUndefined();
 })




});