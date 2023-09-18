import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMoveFormComponent } from './report-move-form.component';

describe('ReportMoveFormComponent', () => {
  let component: ReportMoveFormComponent;
  let fixture: ComponentFixture<ReportMoveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportMoveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportMoveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
