import { HttpClient } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { ConsultaSaldoService } from '@sicatel/core/http/consulta-saldo/consulta-saldo.service';
import { ISaldo } from '@sicatel/shared/models/consulta-saldo/saldo.interface';
import { ISaldos } from '@sicatel/shared/models/consulta-saldo/saldos.interface';
import { ConsultaSaldoTestConstants } from '@sicatel/tests/configs/consulta-saldo-test.constants';
import { of } from 'rxjs';


describe('ConsultaSaldoService', () => {
    const spy = { post: jest.fn() };
    let service: ConsultaSaldoService;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            providers: [{
                 provide: HttpClient,
                 useValue: spy
            }]
        });
        service = TestBed.inject(ConsultaSaldoService);
    }));

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should consulta saldo', () => {
        spy.post.mockReturnValue(of(ConsultaSaldoTestConstants.saldo));
        service.consultaSaldo(ConsultaSaldoTestConstants.filters).subscribe( (response: ISaldos) => {
            expect(spy.post.mock.calls.length).toBe(1);
            expect(response).toBe(ConsultaSaldoTestConstants.saldo);
        });
    });


    it('should consulta complemento', () => {
        spy.post.mockReturnValue(of(ConsultaSaldoTestConstants.complemento));
        service.consultaComplemento(ConsultaSaldoTestConstants.filtersComplemento).subscribe( (response: ISaldo) => {
            expect(spy.post.mock.calls.length).toBe(1);
            expect(response).toBe(ConsultaSaldoTestConstants.complemento);
        });
    });
});
