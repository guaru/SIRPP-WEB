import { TestBed, waitForAsync } from '@angular/core/testing';
import { UtilsService } from '@sicatel/core/services/utils/utils.service';
import { ToastrService } from 'ngx-toastr';

import { SicatelTestMessages } from '../configs/messages-test.constants';

describe('UtilService', () => {
    const spy = {
        success: jest.fn(),
        info: jest.fn(),
        warning: jest.fn(),
        error: jest.fn()
    };
    let service: UtilsService;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [
                {
                    provide: ToastrService,
                    useValue: spy
                }
            ]
        });
        service = TestBed.inject(UtilsService);
    }));

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should open an error toastr', () => {
        service.showErrorMessage(SicatelTestMessages.unexpectedError);
        expect(spy.error).toHaveBeenCalled();
    });
});
