import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as fromAuthentication from '@sicatel/modules/authentication/store/reducers/authentication.reducers';

import { AppComponent } from '../../../app/app.component';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: MockStore<fromAuthentication.State>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        provideMockStore({
          initialState:  {
            [fromAuthentication.featureKey]: fromAuthentication.initialState
          }
       })
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    store  =  TestBed.inject<MockStore<fromAuthentication.State>>(MockStore);
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
