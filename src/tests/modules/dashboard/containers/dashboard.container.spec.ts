import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MemoizedSelector, Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { DashboardComponent } from '@sicatel/modules/dashboard/components/dashboard.component';
import { DashboardContainer } from '@sicatel/modules/dashboard/containers/dashboard.container';
import * as fromDashboard from '@sicatel/modules/dashboard/store/reducers/dashboard.reducer';
import * as DashboardSelectors from '@sicatel/modules/dashboard/store/selectors/dashboard.selectors';
import { DashboardTestConstants } from '@sicatel/tests/configs/dashboard-test.constants';
import { MockComponent } from 'ng-mocks';

describe('Dashboard Container', () => {
  let component: DashboardContainer;
  let fixture: ComponentFixture<DashboardContainer>;
  let selector: MemoizedSelector<{ state: fromDashboard.State }, { state: fromDashboard.State  }>;
  let store: MockStore<fromDashboard.State>;

  beforeEach(waitForAsync( () =>
    TestBed.configureTestingModule({
      declarations: [ DashboardContainer, MockComponent(DashboardComponent) ],
      providers: [ provideMockStore({
        initialState: fromDashboard.initialState,
          selectors: [
            { selector: DashboardSelectors.selectDashoardState, value: DashboardTestConstants.dashboardSettings }
          ]
        }) ]
    })
    .compileComponents())
  );

  beforeEach(() => {
    store = TestBed.inject<MockStore<fromDashboard.State>>(MockStore);
    selector = store.overrideSelector(DashboardSelectors.selectDashoardState, {
      state: fromDashboard.initialState
    });
    fixture = TestBed.createComponent(DashboardContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load selector for dashboard', () => {
    selector.setResult({
      state: {
        ...fromDashboard.initialState, age: DashboardTestConstants.dashboardSettings.age!
      }
    });
    store.refreshState();
    expect(component.dashboardSettings.age).toEqual(22);
  });

  it('should dispatch change customer data', () => {
    jest.spyOn(store, 'dispatch');
    component.changeCustomerDataEvent();
    expect(store.dispatch).toBeCalled();
  });

});
