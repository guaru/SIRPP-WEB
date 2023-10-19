import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDividerModule } from '@angular/material/divider';
import { CarouselModule } from '@sicatel/modules/carousel/carousel.module';
import ReportMoveComponent from '@sicatel/modules/reports/report-move/components/report-move.component';
import { MockModule } from 'ng-mocks';

describe('Dashboard Component', () => {
  let component: ReportMoveComponent;
  let fixture: ComponentFixture<ReportMoveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportMoveComponent ],
      imports: [
        MockModule(MatDividerModule),
        MockModule(CarouselModule)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportMoveComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
