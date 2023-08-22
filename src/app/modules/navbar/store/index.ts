import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromMenu from '@sicatel/modules/navbar/store/reducers/menu.reducers';

export const featureKey = 'navbar';

export interface State {
    [fromMenu.featureKey]: fromMenu.State;
}

export const reducer: ActionReducerMap<State> = {
    [fromMenu.featureKey]: fromMenu.reducer
};

export const selectNavbarFeatureState = createFeatureSelector<State>(featureKey);
