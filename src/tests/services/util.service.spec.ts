import { TestBed, waitForAsync } from '@angular/core/testing';
import { UtilsService } from '@sicatel/core/services/utils/utils.service';
import { SicatelTestMessages } from '@sicatel/tests/configs/messages-test.constants';

describe('UtilService', () => {
    const mockAlert = jest.fn();

    jest.mock('sweetalert2', () => ({
        default: mockAlert
    }));

    let service: UtilsService;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: []
        });
        service = TestBed.inject(UtilsService);
    }));

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should open an error swal', () => {
        service.showErrorMessage(SicatelTestMessages.unexpectedError);
    });

    it('should open an success swal', () => {
        service.showSuccessMessage('Exitoso');
    });

    it('should open an success default', () => {
        service.showSuccessMessage();
    });
});
