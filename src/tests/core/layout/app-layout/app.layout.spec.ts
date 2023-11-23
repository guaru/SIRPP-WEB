import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from '@sicatel/core/layout/app-layout/app.layout';
import { NavbarModule } from '@sicatel/modules/navbar/navbar.module';
import { MockModule } from 'ng-mocks';

describe('AppLayout', () => {

    let component: AppLayoutComponent;
    let fixture: ComponentFixture<AppLayoutComponent>;

    beforeEach(waitForAsync(() => {

        TestBed.configureTestingModule({

            declarations: [AppLayoutComponent],
            imports: [MockModule(NavbarModule), MatSidenavModule, RouterModule],
            providers: []

        }).compileComponents();

    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppLayoutComponent);
        component = fixture.componentInstance;
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('Should be created', () => {
        expect(component).toBeTruthy();
    });

});
