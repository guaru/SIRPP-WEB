import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { DashboardService } from '@sicatel/core/http/dashboard/dashboard.service';
import { UtilsService } from '@sicatel/core/services/utils/utils.service';
import { DashboardActions } from '@sicatel/modules/dashboard/store';
import { DashboardEffects } from '@sicatel/modules/dashboard/store/effects/dashboard.effects';
import { DashboardTestConstants } from '@sicatel/tests/configs/dashboard-test.constants';
import { SicatelTestMessages } from '@sicatel/tests/configs/messages-test.constants';
import { Observable, of, throwError } from 'rxjs';

describe('Dashboard Effects', () => {
    const dashaboardSpy = { loadCustomer: jest.fn() };
    const utilServiceSpy = { showErrorMessage: jest.fn() };
    let actions$: Observable<Action>;
    let effects: DashboardEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                DashboardEffects,
                provideMockActions(() => actions$),
                {
                    provide: DashboardService,
                    useValue: dashaboardSpy
                },
                {
                    provide: UtilsService,
                    useValue: utilServiceSpy
                }
            ]
        });

        effects = TestBed.inject(DashboardEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });

    describe('Load customer Actions', () => {
        it('should dispatch a success effect', () => {
            actions$ = of(DashboardActions.loadCustomer());
            dashaboardSpy.loadCustomer.mockReturnValue(of(DashboardTestConstants.dashboardSettings));

            effects.loadCustomer$.subscribe(action => {
                expect(dashaboardSpy.loadCustomer.mock.calls.length).toBe(1);
                expect(action).toEqual(DashboardActions.loadCustomerSuccess({ data: DashboardTestConstants.dashboardSettings }));
            });
        });

        it('should dispatch an error', () => {
            actions$ = of(DashboardActions.loadCustomer());
            dashaboardSpy.loadCustomer.mockReturnValue(throwError(() => SicatelTestMessages.unexpectedError));

            effects.loadCustomer$.subscribe(action => {
                expect(dashaboardSpy.loadCustomer.mock.calls.length).toBe(1);
                expect(action).toEqual(DashboardActions.loadCustomerFailure({ error: SicatelTestMessages.unexpectedError }));
            });
        });

        it('should dispatch a falure effect', () => {
            actions$ = of(DashboardActions.loadCustomerFailure({ error: SicatelTestMessages.unexpectedError }));
            effects.actionFailure$.subscribe(action => {
                expect(utilServiceSpy.showErrorMessage).toBeCalled();
            });
        });
    });
});
