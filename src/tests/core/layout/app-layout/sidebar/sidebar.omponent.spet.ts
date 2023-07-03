import { ComponentFixture, waitForAsync, TestBed } from '@angular/core/testing';
import { SidebarComponent } from '@sicatel/core/layout/app-layout/sidebar/sidebar.component';

describe('SidebarComponent' ,() => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations : [SidebarComponent]
      }).compileComponents();
  }));

  beforeEach(() => {
    fixture =  TestBed.createComponent(SidebarComponent);
    component =  fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});

