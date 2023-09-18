import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMoveTableComponent } from './report-move-table.component';

describe('ReportMoveTableComponent', () => {
  let component: ReportMoveTableComponent;
  let fixture: ComponentFixture<ReportMoveTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportMoveTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportMoveTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
