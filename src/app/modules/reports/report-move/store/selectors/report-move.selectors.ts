import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReportMove from  '@sicatel/modules/reports/report-move/store/reducers/report-move.reducer';

export const selectReferenceReportMoveState = createFeatureSelector<fromReportMove.State>(fromReportMove.featureKey);
export const selectReportMoveState = createSelector(
            selectReferenceReportMoveState,
            (state: fromReportMove.State) => ({
                state
            })
            );
