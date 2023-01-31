import * as DashboardActions from '@sicatel/modules/dashboard/store/actions/dashboard.actions';
import { initialState, dashboardReducer, State } from '@sicatel/modules/dashboard/store/reducers/dashboard.reducer';
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
            expect(result).toEqual(customState);
        });

        it('Should load customer success state', () => {
            const result = dashboardReducer(initialState, DashboardActions.loadCustomerSuccess({data: { age: 12 }}));
            customState.age = 12;
            expect(result.age).toEqual(customState.age);
        });

        it('Should load customer a failure state', () => {
            const result = dashboardReducer(initialState, DashboardActions.loadCustomerFailure({ error: SicatelTestMessages.unexpectedError }));

            customState.error = SicatelTestMessages.unexpectedError;
            expect(result.error).toEqual(customState.error);
        });
    });
});
