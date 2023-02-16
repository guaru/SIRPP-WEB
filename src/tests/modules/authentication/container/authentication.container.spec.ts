import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AuthenticationComponent } from '@sicatel/modules/authentication/components/authentication.component';
import { AuthenticationContainer } from '@sicatel/modules/authentication/containers/authentication.container';
import { MockComponent } from 'ng-mocks';

describe('Authentication Container', () => {
    let component: AuthenticationContainer;
    let fixture: ComponentFixture<AuthenticationContainer>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [
                AuthenticationContainer,
                MockComponent(AuthenticationComponent)
            ]
        }).compileComponents();
    }));


    beforeEach(() => {
        fixture = TestBed.createComponent(AuthenticationContainer);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
