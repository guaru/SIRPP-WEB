import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MemoizedSelector } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import ReportMoveComponent from '@sicatel/modules/reports/report-move/components/report-move.component';
import { ReportMoveContainer } from '@sicatel/modules/reports/report-move/containers/report-move.container';
import * as fromReportMove from '@sicatel/modules/reports/report-move/store/reducers/report-move.reducer';
import * as reportMoveSelectors from '@sicatel/modules/reports/report-move/store/selectors/report-move.selectors';
import { MockComponent } from 'ng-mocks';

describe('Report-move Container', () => {
  let component: ReportMoveContainer;
  let fixture: ComponentFixture<ReportMoveContainer>;
  let selector: MemoizedSelector<{ state: fromReportMove.State }, { state: fromReportMove.State  }>;
  let store: MockStore<fromReportMove.State>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      declarations: [ fromReportMove, MockComponent(ReportMoveComponent) ],
      imports: [],
      providers: [
        provideMockStore({
          initialState: {
            [fromReportMove.featureKey]: fromReportMove.initialState
          }
        })
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportMoveContainer);
    component = fixture.componentInstance;
    store = TestBed.inject<MockStore<fromReportMove.State>>(MockStore);
    selector = store.overrideSelector(reportMoveSelectors.selectReportMoveState, {
      state: fromReportMove.initialState
    });
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch change customer data', () => {
    jest.spyOn(store, 'dispatch');
    expect(store.dispatch).toBeCalled();
  });

});
