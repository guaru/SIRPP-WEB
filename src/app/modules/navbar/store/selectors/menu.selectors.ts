import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectAuthenticationStateUser } from '@sicatel/modules/authentication/store/selectors/authentication.selectors';
import { selectNavbarFeatureState, State } from '@sicatel/modules/navbar/store';
import * as fromMenu from '@sicatel/modules/navbar/store/reducers/menu.reducers';
import { IUser } from '@sicatel/shared/models/user/user';

export const selectMenuState = createFeatureSelector<fromMenu.State>(fromMenu.featureKey);

export const selectMenuStateWithUserInfo = createSelector(
    selectNavbarFeatureState,
    selectAuthenticationStateUser,
    (navbarState: State, user: IUser) => ({
        state: navbarState[fromMenu.featureKey],
        user
    })
);
