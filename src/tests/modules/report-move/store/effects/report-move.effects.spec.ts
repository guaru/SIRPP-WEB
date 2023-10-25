import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { ReportMoveService } from '@sicatel/core/http/report/report-move/reportmove.service';
import { UtilsService } from '@sicatel/core/services/utils/utils.service';
import * as ReportMoveActions from '@sicatel/modules/reports/report-move/store/actions/report-move.actios';
import { ReporMoveEffects } from '@sicatel/modules/reports/report-move/store/effects/report-move.effects';
import { SicatelTestMessages } from '@sicatel/tests/configs/messages-test.constants';
import { Observable, of, throwError } from 'rxjs';

describe('Dashboard Effects', () => {
    const reportMoveSpy = { loadCustomer: jest.fn() };
    const utilServiceSpy = { showErrorMessage: jest.fn() };
    let actions$: Observable<Action>;
    let effects: ReporMoveEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ReporMoveEffects,
                provideMockActions(() => actions$),
                {
                    provide: ReportMoveService,
                    useValue: reportMoveSpy
                },
                {
                    provide: UtilsService,
                    useValue: utilServiceSpy
                }
            ]
        });

        effects = TestBed.inject(ReporMoveEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });

    describe('Load customer Actions', () => {
        it('should dispatch a success effect', () => {
            reportMoveSpy.loadCustomer.mockReturnValue(of(true));

            effects.loadData$.subscribe(action => {
                expect(reportMoveSpy.loadCustomer.mock.calls.length).toBe(1);
            });
        });

        it('should dispatch an error', () => {
            reportMoveSpy.loadCustomer.mockReturnValue(throwError(() => SicatelTestMessages.unexpectedError));

            effects.loadData$.subscribe(action => {
                expect(reportMoveSpy.loadCustomer.mock.calls.length).toBe(1);
                expect(action).toEqual(ReportMoveActions.loadFailure({ error: SicatelTestMessages.unexpectedError }));
            });
        });

        it('should dispatch a falure effect', () => {
            actions$ = of(ReportMoveActions.loadFailure({ error: SicatelTestMessages.unexpectedError }));
            effects.loadFailure$.subscribe(action => {
                expect(utilServiceSpy.showErrorMessage).toBeCalled();
            });
        });
    });
});
