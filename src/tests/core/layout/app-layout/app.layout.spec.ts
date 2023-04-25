import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { MemoizedSelector } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppLayoutComponent } from '@sicatel/core/layout/app-layout/app.layout';
import { NavbarComponent } from '@sicatel/core/layout/app-layout/navbar/navbar.component';
import * as fromAuthentication from '@sicatel/modules/authentication/store/reducers/authentication.reducers';
import * as AuthenticationSelectors from '@sicatel/modules/authentication/store/selectors/authentication.selectors';
import { IUser } from '@sicatel/shared/models/user/user';
import { AuthenticationTestConstants } from '@sicatel/tests/configs/authentication-test.constants';
import { MockComponent } from 'ng-mocks';

describe('AppLayout', () => {

    let component: AppLayoutComponent;
    let fixture: ComponentFixture<AppLayoutComponent>;
    let store: MockStore<fromAuthentication.State>;
    let selector: MemoizedSelector<IUser, IUser>;


    beforeEach(waitForAsync(() => {

        TestBed.configureTestingModule({

            declarations: [AppLayoutComponent, MockComponent(NavbarComponent), RouterModule],
            imports: [],
            providers: [
                provideMockStore(({
                    initialState: {
                        [fromAuthentication.featureKey]: fromAuthentication.initialState
                    }
                }))
            ]

        }).compileComponents();

    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppLayoutComponent);
        component = fixture.componentInstance;
        store = TestBed.inject<MockStore<fromAuthentication.State>>(MockStore);
        selector = store.overrideSelector(AuthenticationSelectors.selectAuthenticationStateUser, AuthenticationTestConstants.token.user);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('Should be created', () => {
        expect(component).toBeTruthy();
    });

    it('Should be dispatch signOff', () => {
        jest.spyOn(store, 'dispatch');
        component.signOff();
        expect(store.dispatch).toBeCalled();
    });
});
