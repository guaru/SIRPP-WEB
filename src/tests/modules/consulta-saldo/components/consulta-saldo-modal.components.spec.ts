import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { UtilsService } from '@sicatel/core/services/utils/utils.service';
import { ConsultaSaldoModalComponent } from '@sicatel/modules/consulta-saldo/components/consulta-saldo-modal.component';
import { IConsultaSaldoRequest } from '@sicatel/shared/models/consulta-saldo/consulta-saldo-request.interface';
import { MockModule, MockProvider } from 'ng-mocks';

describe('ConsultaSaldoModalComponent', () => {
    let component: ConsultaSaldoModalComponent;
    let fixture: ComponentFixture<ConsultaSaldoModalComponent>;
    const utilServiceSpy = { isEmpty: jest.fn(), showErrorMessage: jest.fn() };
    const dialogRefSpy = { close: jest.fn() };
    const data = { telefono: '', cuenta: '' } as IConsultaSaldoRequest;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ConsultaSaldoModalComponent],
            imports: [
                MockModule(MatDialogModule),
                MockModule(ReactiveFormsModule),
                MockModule(FormsModule),
                MockModule(MatInputModule)
            ],
            providers: [
                MockProvider(MatDialogRef<ConsultaSaldoModalComponent>, dialogRefSpy)
                ,
                {
                    provide: UtilsService,
                    useValue: utilServiceSpy
                },
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: data
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ConsultaSaldoModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should submit valid form data cuenta is empty', () => {
        component.consultaForm.controls.telefono.setValue('0000000000');
        component.consultaForm.controls.cuenta.setValue('');
        const event =  new Event('Submit');
        component.onSubmit(event);
        expect(component.data.telefono).toEqual('0000000000');
        expect(dialogRefSpy.close).toBeCalled();
    });


    it('should host submit valid form data account is empty', () => {
        component.consultaForm.controls.telefono.setValue('0000000000');
        component.consultaForm.controls.cuenta.setValue('');
        const event =  new KeyboardEvent('windows:keydown:f8');
        component. onHostSubmit(event);
        expect(component.data.telefono).toEqual('0000000000');
        expect(dialogRefSpy.close).toBeCalled();
    });

    it('should host submit valid form data phone is empty', () => {
        component.consultaForm.controls.telefono.setValue('');
        component.consultaForm.controls.cuenta.setValue('0000000000');
        const event =  new KeyboardEvent('windows:keydown:f8');
        component. onHostSubmit(event);
        expect(component.data.cuenta).toEqual('0000000000');
        expect(dialogRefSpy.close).toBeCalled();
    });

    it('should submit valid form phone empty and account empty', () => {
        component.consultaForm.controls.telefono.setValue('');
        component.consultaForm.controls.cuenta.setValue('');
        utilServiceSpy.isEmpty.mockReturnValue(true);
        const event =  new Event('Submit');
        component.onSubmit(event);
        expect(utilServiceSpy.showErrorMessage).toBeCalled();
    });

});
