import * as fromReportMove from '@sicatel/modules/reports/report-move/store/reducers/report-move.reducer';
import * as reportMoveSelectors from '@sicatel/modules/reports/report-move/store/selectors/report-move.selectors';

describe('Report-move Selectors', () => {
    it('Should select Report-move', () => {
        const result = reportMoveSelectors.selectReportMoveState({
            [fromReportMove.featureKey]: fromReportMove.initialState
        });

        expect(result).toBeTruthy();
    });
});
