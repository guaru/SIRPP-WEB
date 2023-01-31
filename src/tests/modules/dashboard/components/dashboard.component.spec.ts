import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDividerModule } from '@angular/material/divider';
import { DashboardComponent } from '@sicatel/modules/dashboard/components/dashboard.component';
import { DashboardTestConstants } from '@sicatel/tests/configs/dashboard-test.constants';
import { MockModule } from 'ng-mocks';

describe('Dashboard Component', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [
        MockModule(MatDividerModule)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    component.userSettings = DashboardTestConstants.dashboardSettings;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should change customer data', () => {
    jest.spyOn(component.changeCustomerDataEvent, 'emit');
    component.changeCustomerData();
    expect(component.changeCustomerDataEvent.emit).toHaveBeenCalled();
  });
});

