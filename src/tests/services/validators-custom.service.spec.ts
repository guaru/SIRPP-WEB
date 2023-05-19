import { TestBed, waitForAsync } from '@angular/core/testing';
import { ValidatorsCustomService } from '@sicatel/core/services/utils/validators-custom.service';

describe('ValidatorsCustomService', () =>{

    let service: ValidatorsCustomService;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: []
        });

        service = TestBed.inject(ValidatorsCustomService);
    }));

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
