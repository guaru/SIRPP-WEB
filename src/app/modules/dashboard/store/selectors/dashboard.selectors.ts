import { createSelector } from "@ngrx/store";
import * as fromDashboard from '@sicatel/modules/dashboard/store/reducers/dashboard.reducer';
import { selectMainDashboardState, State } from "@sicatel/modules/dashboard/store";

export const selectDashoardState = createSelector(
    selectMainDashboardState,
    (state: State) => ({
        state: state[fromDashboard.featureKey]
    })
);