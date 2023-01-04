import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromDashboard from '@sicatel/modules/dashboard/store/reducers/dashboard.reducer';

export const featureKey = 'mainDashboard';

export interface State {
    [fromDashboard.featureKey]: fromDashboard.State
};

export const reducer: ActionReducerMap<State> = {
    [fromDashboard.featureKey]: fromDashboard.dashboardReducer
};

export const selectMainDashboardState = createFeatureSelector<State>(featureKey);