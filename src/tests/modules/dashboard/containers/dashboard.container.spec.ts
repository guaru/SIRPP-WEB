import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MemoizedSelector } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { DashboardComponent } from '@sicatel/modules/dashboard/components/dashboard.component';
import { DashboardContainer } from '@sicatel/modules/dashboard/containers/dashboard.container';
import * as fromDashboard from '@sicatel/modules/dashboard/store/reducers/dashboard.reducer';
import * as DashboardSelectors from '@sicatel/modules/dashboard/store/selectors/dashboard.selectors';
import { MockComponent } from 'ng-mocks';

describe('Dashboard Container', () => {
  let component: DashboardContainer;
  let fixture: ComponentFixture<DashboardContainer>;
  let selector: MemoizedSelector<{ state: fromDashboard.State }, { state: fromDashboard.State  }>;
  let store: MockStore<fromDashboard.State>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      declarations: [ DashboardContainer, MockComponent(DashboardComponent) ],
      imports: [],
      providers: [
        provideMockStore({
          initialState: {
            [fromDashboard.featureKey]: fromDashboard.initialState
          }
        })
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardContainer);
    component = fixture.componentInstance;
    store = TestBed.inject<MockStore<fromDashboard.State>>(MockStore);
    selector = store.overrideSelector(DashboardSelectors.selectDashoardState, {
      state: fromDashboard.initialState
    });
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
