import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMoveComponent } from './report-move.component';

describe('ReportMoveComponent', () => {
  let component: ReportMoveComponent;
  let fixture: ComponentFixture<ReportMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportMoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
