import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MemoizedSelector } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { UtilsService } from '@sicatel/core/services/utils/utils.service';
import { ConsultaSaldoComponent } from '@sicatel/modules/consulta-saldo/components/consulta-saldo.component';
import { ConsultaSaldoContainer } from '@sicatel/modules/consulta-saldo/containers/consulta-saldo.container';
import { ConsultaSaldoSelectors, fromConsultaSaldo } from '@sicatel/modules/consulta-saldo/store';
import { TypeCsComplemento } from '@sicatel/shared/enums/type-cs-complement';
import { IConsultaSaldoRequest } from '@sicatel/shared/models/consulta-saldo/consulta-saldo-request.interface';
import { MockModule, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

describe('ConsultaSaldo Container', () => {
    let component: ConsultaSaldoContainer;
    let fixture: ComponentFixture<ConsultaSaldoContainer>;
    let store: MockStore<fromConsultaSaldo.State>;
    let selectorSaldos: MemoizedSelector<{ state: fromConsultaSaldo.State }, { state: fromConsultaSaldo.State }>;
    const utilServiceSpy = { showErrorMessage: jest.fn(), showInfoMessage: jest.fn(), copyIsNotEmptyProperties: jest.fn(), isEmpty: jest.fn() };
    const matDialogSpy = { open: jest.fn() };
    const matDialogRefSpy = { afterClosed: jest.fn() };
    const observableSpy = { subscribe: jest.fn() };

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ConsultaSaldoContainer, ConsultaSaldoComponent],
            imports: [
                MockModule(FormsModule),
                MockModule(MatDialogModule),
                MockModule(MatTabsModule),
                MockModule(CommonModule),
                MockModule(MatDialogModule),
                MockModule(MatFormFieldModule),
                MockModule(MatInputModule),
                MockModule(MatInputModule),
                MockModule(MatOptionModule),
                MockModule(MatSelectModule),
                MockModule(MatCardModule)
            ],
            providers: [
                {
                    provide: UtilsService,
                    useValue: utilServiceSpy
                },
                MockProvider(MatDialog, matDialogSpy),
                MockProvider(MatDialogRef, matDialogRefSpy),
                provideMockStore({
                    initialState: {
                        [fromConsultaSaldo.featureKey]: fromConsultaSaldo.initialState
                    }
                })
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ConsultaSaldoContainer);
        component = fixture.componentInstance;
        store = TestBed.inject<MockStore<fromConsultaSaldo.State>>(MockStore);
        selectorSaldos = store.overrideSelector(ConsultaSaldoSelectors.selectConsultaSaldoState,{
             state: fromConsultaSaldo.initialState
            });
        matDialogSpy.open.mockReturnValue(matDialogRefSpy);
        matDialogRefSpy.afterClosed.mockReturnValue(of({ telefono: '0000000000', cuenta: '' } as IConsultaSaldoRequest));
        fixture.detectChanges();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should on consulta', () => {
        jest.spyOn(store, 'dispatch');
        component.onConsulta({ telefono: '4232321432', cuenta: '' } as IConsultaSaldoRequest);
        expect(store.dispatch).toBeCalled();
    });

    it('should on consulta valid filters error', () => {
        utilServiceSpy.isEmpty.mockReturnValue(true);
        expect(component.isValidFilters({ telefono: '', cuenta: '' } as IConsultaSaldoRequest)).toEqual(false);
    });

    it('should on consulta complemento', () => {
        jest.spyOn(store, 'dispatch');
        utilServiceSpy.isEmpty.mockReturnValue(false);
        component.onConsultaComplemento({ telefono: '4232321432', cuenta: '', typeCs: TypeCsComplemento.COBRANZA } as IConsultaSaldoRequest);
        expect(store.dispatch).toBeCalled();
    });

    it('should on reset', () => {
        jest.spyOn(store, 'dispatch');
        component.onReset();
        expect(store.dispatch).toBeCalled();
    });

});
