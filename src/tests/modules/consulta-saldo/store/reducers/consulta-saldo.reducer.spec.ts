import { SicatelMessages } from '@sicatel/configs/messsages.constant';
import { ConsultaSaldoActions, fromConsultaSaldo } from '@sicatel/modules/consulta-saldo/store';
import { IConsultaSaldoRequest } from '@sicatel/shared/models/consulta-saldo/consulta-saldo-request.interface';
import { ISaldo } from '@sicatel/shared/models/consulta-saldo/saldo.interface';
import { ISaldos } from '@sicatel/shared/models/consulta-saldo/saldos.interface';
import { IError } from '@sicatel/shared/models/request/error.interface';
import { ConsultaSaldoTestConstants } from '@sicatel/tests/configs/consulta-saldo-test.constants';

describe('Consulta Saldo Reducer', () => {
    let customState: fromConsultaSaldo.State;

    describe('Consulta saldo', () => {
        beforeEach(() => {
            customState = { ...fromConsultaSaldo.initialState };
        });

        afterEach(() => {
            customState = { ...fromConsultaSaldo.initialState };
        });

        it('should consulta saldo previus state ', () => {
            const result = fromConsultaSaldo.consultaSaldoReducer(fromConsultaSaldo.initialState,
                ConsultaSaldoActions.consultaSaldo({ request: ConsultaSaldoTestConstants.filters }));
            customState.loading = true;
            customState.request = ConsultaSaldoTestConstants.filters;
            expect(result).toEqual(customState);
        });

        it('should consulta saldo success', () => {
            const result = fromConsultaSaldo.consultaSaldoReducer(fromConsultaSaldo.initialState,
                ConsultaSaldoActions.consultaSaldoSuccess({ saldos: ConsultaSaldoTestConstants.saldo }));
            customState.loading = false;
            customState.enabledRegion = false;
            customState.enabledPay = true;
            customState.saldos = ConsultaSaldoTestConstants.saldo;
            expect(result).toEqual(customState);
        });

        it('should consulta saldo failed', () => {
            const result = fromConsultaSaldo.consultaSaldoReducer(fromConsultaSaldo.initialState,
                ConsultaSaldoActions.consultaSaldoFaild({ error: SicatelMessages.errorGatewayTimeOut }));
            customState.loading = false;
            customState.enabledRegion = false;
            customState.enabledCs =  true;
            customState.error = SicatelMessages.errorGatewayTimeOut;
            expect(result).toEqual(customState);
        });

        it('should consulta complemento', () => {
            const result = fromConsultaSaldo.consultaSaldoReducer(fromConsultaSaldo.initialState,
                ConsultaSaldoActions.consultaComplemento({ request: ConsultaSaldoTestConstants.filtersComplemento }));
            customState.loading = true;
            customState.request = ConsultaSaldoTestConstants.filtersComplemento;
            expect(result).toEqual(customState);
        });

        it('should consulta complemento success', () => {
            const result = fromConsultaSaldo.consultaSaldoReducer(fromConsultaSaldo.initialState,
                ConsultaSaldoActions.consultaComplementoSuccess({ saldo: ConsultaSaldoTestConstants.complemento }));
            customState.loading = false;
            customState.saldos.plataforma = '';
            customState.saldoComplemento = ConsultaSaldoTestConstants.complemento;
            expect(result.saldoComplemento.nombreCliente).toEqual(ConsultaSaldoTestConstants.complemento.nombreCliente);
        });

        it('should consulta complemento error', () => {
            const result = fromConsultaSaldo.consultaSaldoReducer(fromConsultaSaldo.initialState,
                ConsultaSaldoActions.consultaComplementoFaild({ error: SicatelMessages.errorGatewayTimeOut }));
            customState.loading = false;
            customState.error = SicatelMessages.errorGatewayTimeOut;
            expect(result).toEqual(customState);
        });


        it('should disabled consulta', () => {
            const result = fromConsultaSaldo.consultaSaldoReducer(fromConsultaSaldo.initialState,
                ConsultaSaldoActions.consultaSaldoDisabledConsulta());
            customState.enabledCs = false;
            expect(result.enabledCs).toEqual(customState.enabledCs);
        });

        it('should reset', () => {
            const result = fromConsultaSaldo.consultaSaldoReducer(fromConsultaSaldo.initialState,
                ConsultaSaldoActions.consultaSaldoReset());
            customState.saldos = {} as ISaldos;
            customState.loading = false;
            customState.error = {} as IError;
            customState.request = {} as IConsultaSaldoRequest;
            customState.saldoComplemento = {} as ISaldo;
            customState.enabledRegion = false;
            customState.enabledCs = true;
            customState.saldos = fromConsultaSaldo.initialState.saldos;
            expect(result).toEqual(customState);
        });

    });
});
