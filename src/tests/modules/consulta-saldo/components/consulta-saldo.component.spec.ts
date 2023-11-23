import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { UtilsService } from '@sicatel/core/services/utils/utils.service';
import { ConsultaSaldoComponent } from '@sicatel/modules/consulta-saldo/components/consulta-saldo.component';
import { ConsultaSaldoTestConstants } from '@sicatel/tests/configs/consulta-saldo-test.constants';
import { MockModule } from 'ng-mocks';

describe('ConsultaSaldoComponent', () => {

    let component: ConsultaSaldoComponent;
    let fixture: ComponentFixture<ConsultaSaldoComponent>;
    const utilServiceSpy = { showErrorMessage: jest.fn() };
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ConsultaSaldoComponent],
            imports: [
                MockModule(MatInputModule),
                MockModule(MatSelectModule),
                MockModule(MatCardModule),
                MockModule(FormsModule)
            ],
            providers: [
                {
                    provide: UtilsService,
                    useValue: utilServiceSpy
                }
            ]
        });
    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(ConsultaSaldoComponent);
        component = fixture.componentInstance;
        component.saldo =  ConsultaSaldoTestConstants.saldo;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should consulta is enable', () => {
        component.enabledCs = true;
        component.telefono = '000000000';
        component.consultaEvent.subscribe(data => {
            expect(data.telefono).toEqual('000000000');
        });
        const event =  new Event('window:keydown.f8');
        component.onConsulta(event);
    });

    it('should consulta is disabled', () => {
        component.enabledCs = false;
        component.telefono = '000000000';
        const event =  new Event('window:keydown.f8');
        component.consultaEvent.subscribe(data => {
            expect(data.telefono).toEqual('000000000');
        });
        component.onConsulta(event);
    });


    it('should on consulta change region', () => {
        component.enabledCs = false;
        component.telefono = '000000000';
        const event =  new Event('window:keydown.f8');
        component.consultaEvent.subscribe(data => {
            expect(data.telefono).toEqual('000000000');
        });
        component.onConsultaChange();
    });

    it('should on saldo pagar', () => {
        const event =  new Event('window:keydown.f9');
        component.enabledPay =  true;
        component.onSaldoPagar(event);
        expect(utilServiceSpy.showErrorMessage).toBeCalled();
    });

    it('should on saldo pagar disabled pay', () => {
        const event =  new Event('window:keydown.f9');
        component.enabledPay =  false;
        component.onSaldoPagar(event);
    });

    it('should on saldo telecomunicaciones', () => {
        const event =  new Event('window:keydown.f12');
        component.enabledPay =  true;
        component.onSaldoTelecomunicaciones(event);
        expect(utilServiceSpy.showErrorMessage).toBeCalled();
    });

    it('should on saldo telecomunicaciones disabled pay', () => {
        const event =  new Event('window:keydown.f12');
        component.enabledPay =  false;
        component.onSaldoTelecomunicaciones(event);
    });

    it('should on saldo estimado pagar', () => {
        const event =  new Event('window:keydown.f5');
        component.enabledPay =  true;
        component.onSaldoEstimadoAPagar(event);
        expect(utilServiceSpy.showErrorMessage).toBeCalled();
    });

    it('should on saldo estimado pagar disabled pay', () => {
        const event =  new Event('window:keydown.f5');
        component.enabledPay =  false;
        component.onSaldoEstimadoAPagar(event);
    });

    it('should on salir', () => {
        const event =  new Event('window:keydown.esc');
        component.resetEvent.subscribe(result => {
            expect(result).toBeUndefined();
        });
        component.onSalir(event);
    });

    it('should on facturacion', () => {
        const event =  new Event('window:keydown.f2');
        component.enabledPay = true;
        component.telefono = '000000000';
        component.consultaEvent.subscribe(result => {
            expect(result.telefono).toEqual('000000000');
        });
        component.onFacturacion(event);
    });

    it('should on facturacion disabled pay', () => {
        const event =  new Event('window:keydown.f2');
        component.enabledPay = false;
        component.onFacturacion(event);
    });

    it('should on telecomunicaciones y servicios', () => {
        const event =  new Event('window:keydown.f1');
        component.enabledPay = true;
        component.telefono = '000000000';
        component.consultaEvent.subscribe(result => {
            expect(result.telefono).toEqual('000000000');
        });
        component.onTelecomServ(event);
    });

    it('should on telecomunicaciones y servicios disbled pay', () => {
        const event =  new Event('window:keydown.f1');
        component.enabledPay = false;
        component.telefono = '0000000000';
        component.onTelecomServ(event);
        component.consultaComplementoEvent.subscribe(result => {
            expect(result.telefono).toEqual('0000000000');
        });
    });

    it('should on cobranza', () => {
        const event =  new Event('window:keydown.f3');
        component.enabledPay = true;
        component.telefono = '000000000';
        component.consultaEvent.subscribe(result => {
            expect(result.telefono).toEqual('000000000');
        });
        component.onCobranza(event);
    });

    it('should on cobranza disbaled pay', () => {
        const event =  new Event('window:keydown.f3');
        component.enabledPay = false;
        component.onCobranza(event);
    });

});
