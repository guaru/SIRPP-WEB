import { createSelector } from '@ngrx/store';
import { selectMainDashboardState, State } from '@sicatel/modules/dashboard/store';
import * as fromDashboard from '@sicatel/modules/dashboard/store/reducers/dashboard.reducer';

export const selectDashoardState = createSelector(
    selectMainDashboardState,
    (state: State) => ({
        state: state[fromDashboard.featureKey]
    })
);
