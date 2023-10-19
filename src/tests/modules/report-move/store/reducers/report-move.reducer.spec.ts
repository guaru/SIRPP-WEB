import * as ReportMoveActions from '@sicatel/modules/reports/report-move/store/actions/report-move.actios';
import { initialState, reporMoveReducer, State } from '@sicatel/modules/reports/report-move/store/reducers/report-move.reducer';
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
            const result = reporMoveReducer(initialState, ReportMoveActions.loadData);
            customState.loading = true;
            expect(result).toEqual(customState);
        });

        it('Should load customer success state', () => {
            const result = reporMoveReducer(initialState, ReportMoveActions.loadData);
            customState.loading = true;
            expect(result).toEqual(customState);
        });

        it('Should load customer a failure state', () => {
            const result = reporMoveReducer(initialState, ReportMoveActions.loadFailure({ error: SicatelTestMessages.unexpectedError }));
            customState.error = SicatelTestMessages.unexpectedError;
            expect(result.error).toEqual(customState.error);
        });
    });
});
