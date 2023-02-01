import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { DashboardService } from '@sicatel/core/http/dashboard/dashboard.service';
import { UtilsService } from '@sicatel/core/services/utils/utils.service';
import { DashboardEffects } from '@sicatel/modules/dashboard/store/effects/dashboard.effects';
import { Observable } from 'rxjs';

describe('Dashboard Effects', () => {
    const dashaboardSpy = { loadCustomer: jest.fn() };
    const utilServiceSpy = { showErrorMessage: jest.fn() };
    const actions$ = Observable<Action>;
    let effects: DashboardEffects;
/*
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
    */
});
