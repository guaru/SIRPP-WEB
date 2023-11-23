import { createFeatureSelector, createSelector } from '@ngrx/store';
import { fromConsultaSaldo } from '@sicatel/modules/consulta-saldo/store/index';

export const selectReferenceConsultaSaldoState = createFeatureSelector<fromConsultaSaldo.State>(fromConsultaSaldo.featureKey);
export const selectConsultaSaldoState = createSelector(selectReferenceConsultaSaldoState,
    (state: fromConsultaSaldo.State) => ({
        state
    }));
