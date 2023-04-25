import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NavbarComponent } from '@sicatel/core/layout/app-layout/navbar/navbar.component';
import { AuthenticationTestConstants } from '@sicatel/tests/configs/authentication-test.constants';

describe('NavbarComponent', () =>{

    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(waitForAsync(() =>{

        TestBed.configureTestingModule({
             declarations:[ NavbarComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture   =  TestBed.createComponent(NavbarComponent);
        component =  fixture.componentInstance;
        component.user =  AuthenticationTestConstants.token.user;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should be close sesion ', () => {

        jest.spyOn(component.signOffEvent,'emit');
        component.onClicksignOff();
        expect(component.signOffEvent.emit).toBeCalled();
    });


});
