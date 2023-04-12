import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MockModule, MockProvider } from 'ng-mocks';
import { MemoizedSelector } from '@ngrx/store';
import { MatSelectModule } from '@angular/material/select';

import * as fromAuthentication from '@sicatel/modules/authentication/store/reducers/authentication.reducers';
import { AuthenticationComponent } from '@sicatel/modules/authentication/components/authentication.component';
import * as AuthenticationSelectors from '@sicatel/modules/authentication/store/selectors/authentication.selectors';
import { ELoginType } from '@sicatel/shared/enums/login-type.enum';




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

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Loading true', () => {
    expect(component.loading).toEqual(false);
  });
  
  it('change Type cac', () => {
    component.type.setValue(ELoginType.CAC);
    component.changeType();
    expect(component.selectedType).toEqual(ELoginType.CAC);
  });

  
  it('change Type dat', () => {
    component.type.setValue(ELoginType.DAT);
    component.changeType();
    expect(component.selectedType).toEqual(ELoginType.DAT);
  });


  it('Login validators cac', () => {
    component.type.setValue(ELoginType.CAC);
    component.userName.setValue("USERNAME");
    component.password.setValue("pass");
    component.position.setValue("V36");
    component.changeType();
    expect(component.loginForm.valid).toEqual(true);
  });

  
  it('Login validators DAT', () => {
    component.type.setValue(ELoginType.DAT);
    component.userName.setValue("USERNAME");
    component.password.setValue("pass");
    component.phone.setValue("55750328");
    component.changeType();
    expect(component.loginForm.valid).toEqual(true);
  });



  it('Login submit', () => {
    component.type.setValue(ELoginType.CAC);
    component.userName.setValue("USERNAME");
    component.password.setValue("pass");
    component.position.setValue("V36");
    component.changeType();
    jest.spyOn(store, 'dispatch');
    component.onSubmit();
    expect(store.dispatch).toBeCalled();
  });



});

