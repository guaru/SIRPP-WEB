import {  createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuthentication from '@sicatel/modules/authentication/store/reducers/authentication.reducers';

export const selectReferenceAuthenticationState = createFeatureSelector<fromAuthentication.State>(fromAuthentication.featureKey);

export const selectAuthenticationState = createSelector(
    selectReferenceAuthenticationState,
            (state: fromAuthentication.State) => ({
                state
})
);

export const selectAuthenticationStateUser = createSelector(
    selectReferenceAuthenticationState,
            (state: fromAuthentication.State) => state.token!.user
);

export const selectAuthenticationStateLoading = createSelector(
    selectReferenceAuthenticationState,
            (state: fromAuthentication.State) => state.loading );

export const selectAuthenticationMenu = createSelector(
    selectReferenceAuthenticationState,
        (state: fromAuthentication.State) => state.menu);


export const selectAuthenticationToken= createSelector(
            selectReferenceAuthenticationState,
                (state: fromAuthentication.State) => state.token);