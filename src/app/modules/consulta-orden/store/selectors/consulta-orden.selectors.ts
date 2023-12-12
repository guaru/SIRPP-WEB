import { createFeatureSelector, createSelector } from '@ngrx/store';
import { fromConsultaOrden } from '@sicatel/modules/consulta-orden/store/index';

export const selectReferenceConsultaOrden = createFeatureSelector<fromConsultaOrden.State>(fromConsultaOrden.featureKey);
export const selectConsultaOrden = createSelector(selectReferenceConsultaOrden,     (state: fromConsultaOrden.State) => ({
    state
}));
