import * as DashboardActions from '@sicatel/modules/dashboard/store/actions/dashboard.actions';
import { initialState, dashboardReducer, State } from '@sicatel/modules/dashboard/store/reducers/dashboard.reducer';
import { DashboardTestConstants } from '@sicatel/tests/configs/dashboard-test.constants';
import { SicatelTestMessages } from '@sicatel/tests/configs/messages-test.constants';

describe('Dashboard Reducer', () => {
    let customState: State;

    describe('Load customer', () => {
        beforeEach(() => {
            customState = { ...initialState };
        });

        afterEach(() => {
            customState = { ...initialState };
        });

        it('Should load customer prevoius state', () => {
            const result = dashboardReducer(initialState, DashboardActions.loadCustomer);
            customState.loading = true;
            expect(result).toEqual(customState);
        });

        it('Should load customer success state', () => {
            const result = dashboardReducer(initialState, DashboardActions.loadCustomerSuccess({ data: DashboardTestConstants.dashboardSettings }));
            customState.settings.age = 22;
            expect(result.settings.age).toEqual(customState.settings.age);
        });

        it('Should load customer a failure state', () => {
            const result = dashboardReducer(initialState, DashboardActions.loadCustomerFailure({ error: SicatelTestMessages.unexpectedError }));

            customState.error = SicatelTestMessages.unexpectedError;
            expect(result.error).toEqual(customState.error);
        });
    });
});
