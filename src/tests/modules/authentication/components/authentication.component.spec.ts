import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { MemoizedSelector } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AuthenticationComponent } from '@sicatel/modules/authentication/components/authentication.component';
import * as fromAuthentication from '@sicatel/modules/authentication/store/reducers/authentication.reducers';
import * as AuthenticationSelectors from '@sicatel/modules/authentication/store/selectors/authentication.selectors';
import { ELoginType } from '@sicatel/shared/enums/login-type.enum';
import { MockModule, MockProvider } from 'ng-mocks';

describe('AuthenticationComponent', () => {
  const routerSpy = { navigate: jest.fn() };
  let component: AuthenticationComponent;
  let fixture: ComponentFixture<AuthenticationComponent>;
  let store: MockStore<fromAuthentication.State>;
  let selector: MemoizedSelector<boolean,boolean>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationComponent ],
      imports: [
        MockModule(MatIconModule),
        MockModule(MatInputModule),
        MockModule(MatSelectModule),
        MockModule(MatFormFieldModule),
        MockModule(FormsModule),
        MockModule(ReactiveFormsModule),
        MockModule(MatButtonModule),
        MockModule(MatProgressSpinnerModule)
      ],
      providers: [
        MockProvider(Router, routerSpy),
        provideMockStore({
           initialState:  {
             [fromAuthentication.featureKey]: fromAuthentication.initialState
           }
        })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationComponent);
    component = fixture.componentInstance;
    store  =  TestBed.inject<MockStore<fromAuthentication.State>>(MockStore);
    selector =  store.overrideSelector(AuthenticationSelectors.selectAuthenticationStateLoading,false);
    fixture.detectChanges();
  });

 afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Loading true', () => {
    expect(component.loading).toEqual(false);
  });

  it('should change Type cac', () => {
    component.loginForm.controls.type.setValue(ELoginType.CAC);
    component.changeType();
    expect(component.selectedType).toEqual(ELoginType.CAC);
  });

  it('should change Type dat', () => {
    component.loginForm.controls.type.setValue(ELoginType.DAT);
    component.changeType();
    expect(component.selectedType).toEqual(ELoginType.DAT);
  });

  it('should change Type not defined', () => {
    component.loginForm.controls.type.setValue(null);
    component.changeType();
    expect(component.selectedType).toEqual(ELoginType.CAC);
  });

  it('should Login validators cac', () => {
    component.loginForm.controls.type.setValue(ELoginType.CAC);
    component.loginForm.controls.userName.setValue('USERNAME');
    component.loginForm.controls.password.setValue('pass');
    component.loginForm.controls.position.setValue('V36');
    component.changeType();
    expect(component.loginForm.valid).toEqual(true);
  });

  it('should Login validators DAT', () => {
    component.loginForm.controls.type.setValue(ELoginType.DAT);
    component.loginForm.controls.userName.setValue('USERNAME');
    component.loginForm.controls.password.setValue('pass');
    component.loginForm.controls.phone.setValue('55750328');
    component.changeType();
    expect(component.loginForm.valid).toEqual(true);
  });

  it('should Login submit', () => {
    component.loginForm.controls.type.setValue(ELoginType.CAC);
    component.loginForm.controls.userName.setValue('USERNAME');
    component.loginForm.controls.password.setValue('pass');
    component.loginForm.controls.position.setValue('V36');
    component.changeType();
    jest.spyOn(store, 'dispatch');
    component.onSubmit();
    expect(store.dispatch).toBeCalled();
  });
});
