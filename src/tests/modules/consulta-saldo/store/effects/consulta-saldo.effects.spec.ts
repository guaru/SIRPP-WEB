import { HttpClientModule } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, Store } from '@ngrx/store';
import { ConsultaSaldoService } from '@sicatel/core/http/consulta-saldo/consulta-saldo.service';
import { UtilsService } from '@sicatel/core/services/utils/utils.service';
import { ConsultaSaldoActions } from '@sicatel/modules/consulta-saldo/store';
import { ConsultaSaldoEffects } from '@sicatel/modules/consulta-saldo/store/effects/consulta-saldo.effects';
import { ConsultaSaldoTestConstants } from '@sicatel/tests/configs/consulta-saldo-test.constants';
import { Observable, of, throwError } from 'rxjs';

describe('Consulta Saldo Effects', () => {
    const consultaSaldoServiceSpy = { consultaSaldo: jest.fn(), consultaComplemento: jest.fn() };
    const utilServiceSpy = { showErrorMessage: jest.fn() };
    const storeSpy = { dispatch: jest.fn() };
    let actions$: Observable<Action>;
    let effects: ConsultaSaldoEffects;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            providers: [
                ConsultaSaldoEffects,
                provideMockActions(() => actions$),
                {
                    provide: ConsultaSaldoService,
                    useValue: consultaSaldoServiceSpy
                },
                {
                    provide: UtilsService,
                    useValue: utilServiceSpy
                },
                {
                    provide: Store,
                    useValue: storeSpy
                }
            ],
            imports: [HttpClientModule]
        });
        effects = TestBed.inject(ConsultaSaldoEffects);
    }));

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });

    describe('Consulta saldo actions', () => {

        it('should dispatch a success effect', () => {
            actions$ = of(ConsultaSaldoActions.consultaSaldo({ request: ConsultaSaldoTestConstants.filters }));
            consultaSaldoServiceSpy.consultaSaldo.mockReturnValue(of(ConsultaSaldoTestConstants.saldo));
            effects.consultaSaldo$.subscribe(action => {
                expect(consultaSaldoServiceSpy.consultaSaldo.mock.calls.length).toBe(1);
                expect(action).toEqual(ConsultaSaldoActions.consultaSaldoSuccess({ saldos: ConsultaSaldoTestConstants.saldo }));
            });
        });


        it('should dispatch a success effect with error bussiness', () => {
            actions$ = of(ConsultaSaldoActions.consultaSaldo({ request: ConsultaSaldoTestConstants.filters }));
            consultaSaldoServiceSpy.consultaSaldo.mockReturnValue(of(ConsultaSaldoTestConstants.saldoError));
            effects.consultaSaldo$.subscribe(action => {
                expect(utilServiceSpy.showErrorMessage).toBeCalled();
            });
        });

        it('should dispatch a success effect with responsabilidad de pago diferente', () => {
            actions$ = of(ConsultaSaldoActions.consultaSaldo({ request: ConsultaSaldoTestConstants.filters }));
            consultaSaldoServiceSpy.consultaSaldo.mockReturnValue(of(ConsultaSaldoTestConstants.saldoWithResponsabilidadPago));
            effects.consultaSaldo$.subscribe(action => {
                expect(utilServiceSpy.showErrorMessage).toBeCalled();
            });
        });

        it('should dispath a error consulta', () => {
            actions$ = of(ConsultaSaldoActions.consultaSaldo({ request: ConsultaSaldoTestConstants.filters }));
            consultaSaldoServiceSpy.consultaSaldo.mockReturnValue(throwError(() => ConsultaSaldoTestConstants.unexpectedError));
            effects.consultaSaldo$.subscribe(action => {
                expect(consultaSaldoServiceSpy.consultaSaldo.mock.calls.length).toBe(4);
                expect(action).toEqual(ConsultaSaldoActions.consultaSaldoFaild({ error: ConsultaSaldoTestConstants.unexpectedError }));
            });
        });

        it('should dispath fail consulta saldo', () => {
            actions$ = of(ConsultaSaldoActions.consultaSaldoFaild({ error: ConsultaSaldoTestConstants.unexpectedError }));
            effects.consultaSaldoFaild$.subscribe(action => {
                expect(utilServiceSpy.showErrorMessage).toBeCalled();
            });
        });

    });

    describe('Consulta complemento actions', () => {

        it('should dispath consulta complemento', () => {
            actions$ = of(ConsultaSaldoActions.consultaComplemento({ request: ConsultaSaldoTestConstants.filtersComplemento }));
            consultaSaldoServiceSpy.consultaComplemento.mockReturnValue(of(ConsultaSaldoTestConstants.complemento));
            effects.consultaComplemento$.subscribe(action => {
                expect(consultaSaldoServiceSpy.consultaComplemento.mock.calls.length).toBe(1);
                expect(action).toEqual(ConsultaSaldoActions.consultaComplementoSuccess({ saldo: ConsultaSaldoTestConstants.complemento }));
            });
        });

        it('should dispath consulta complemento', () => {
            actions$ = of(ConsultaSaldoActions.consultaComplemento({ request: ConsultaSaldoTestConstants.filtersComplemento }));
            consultaSaldoServiceSpy.consultaComplemento.mockReturnValue(throwError(() => ConsultaSaldoTestConstants.unexpectedError));
            effects.consultaComplemento$.subscribe(action => {
                expect(consultaSaldoServiceSpy.consultaComplemento.mock.calls.length).toBe(2);
                expect(action).toEqual(ConsultaSaldoActions.consultaComplementoFaild({ error: ConsultaSaldoTestConstants.unexpectedError }));
            });
        });

        it('should dispath consulta complemento fail', () => {
            actions$ = of(ConsultaSaldoActions.consultaComplementoFaild({ error: ConsultaSaldoTestConstants.unexpectedError }));
            effects.consultaComplementoFaild$.subscribe(action => {
                expect(utilServiceSpy.showErrorMessage).toBeCalled();
            });
        });

    });

});
