import * as fromDashboard from '@sicatel/modules/dashboard/store/reducers/dashboard.reducer';
import * as DashboardSelectors from '@sicatel/modules/dashboard/store/selectors/dashboard.selectors';

describe('Dashboard Selectors', () => {
    it('Should select dashaboard', () => {
        const result = DashboardSelectors.selectDashoardState({
            [fromDashboard.featureKey]: fromDashboard.initialState
        });

        expect(result).toBeTruthy();
    });
});
