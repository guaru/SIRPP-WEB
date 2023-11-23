import { ConsultaSaldoSelectors, fromConsultaSaldo } from '@sicatel/modules/consulta-saldo/store';

describe('Consulta saldo Selectors', () => {
    it('should select consulta saldo', () => {
        const result = ConsultaSaldoSelectors.selectConsultaSaldoState({
            [fromConsultaSaldo.featureKey] : fromConsultaSaldo.initialState
        });
        expect(result).toBeTruthy();
    });
});
