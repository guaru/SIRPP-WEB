import * as fromAuthentication from '@sicatel/modules/authentication/store/reducers/authentication.reducers';
import * as AuthenticationSelectors from '@sicatel/modules/authentication/store/selectors/authentication.selectors';
import { IToken, IUser } from '@sicatel/shared/models/user/user';

describe('Authentication selectors', () => {

  it('should select  authentication', () => {
    const result = AuthenticationSelectors.selectAuthenticationState({
      [fromAuthentication.featureKey]: fromAuthentication.initialState
    });
    expect(result).toBeTruthy();
  });

  it('should select loading authentication', () => {
    const result = AuthenticationSelectors.selectAuthenticationStateLoading({
      [fromAuthentication.featureKey]: fromAuthentication.initialState
    });
    expect(result).toEqual(false);
  });

  it('should select user authentication', () => {
    const result = AuthenticationSelectors.selectAuthenticationStateUser({
      [fromAuthentication.featureKey]: {
        ...fromAuthentication.initialState,
        token: {
          accessToken: 'aksmndgajksdjkadadk',
          user: { idUsuario: 'VXXXXXX' } as IUser
        } as IToken
      }
    });
    expect(result.idUsuario).toEqual('VXXXXXX');
  });

  it('should select user authentication empty', () => {
    const result = AuthenticationSelectors.selectAuthenticationStateUser({
      [fromAuthentication.featureKey]: fromAuthentication.initialState
    });
    expect(result).toBeUndefined();
  });

  it('should select token', () => {
    const result = AuthenticationSelectors.selectAuthenticationToken({
      [fromAuthentication.featureKey]: fromAuthentication.initialState
    });
    expect(result).toEqual({});
  });

});
