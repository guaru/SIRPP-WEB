import { HttpClient } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { DashboardService } from '@sicatel/core/http/dashboard/dashboard.service';
import { IDashboardSettings } from '@sicatel/modules/dashboard/models/dashboard-settings.interface';
import { of } from 'rxjs';

import { DashboardTestConstants } from '../configs/dashboard-test.constants';

describe('DashboardService', () => {
    const spy = {
        get: jest.fn()
    };
    let service: DashboardService;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: HttpClient,
                    useValue: spy
                }
            ]
        });
        service = TestBed.inject(DashboardService);
    }));

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should load customer', () => {
        spy.get.mockReturnValue(of(DashboardTestConstants.dashboardSettings));
        service.loadCustomer().subscribe((response: IDashboardSettings) => {
            expect(spy.get.mock.calls.length).toBe(1);
            expect(response).toBe(DashboardTestConstants.dashboardSettings);
        });
    });
});
