import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDashboard from '@sicatel/modules/dashboard/store/reducers/dashboard.reducer';

export const selectReferenceDashboardState = createFeatureSelector<fromDashboard.State>(fromDashboard.featureKey);

export const selectDashoardState = createSelector(
    selectReferenceDashboardState,
    (state: fromDashboard.State) => ({
        state
    })
);
