import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { LoginLayoutComponent } from '@sicatel/core/layout/login-layout/login.layout';
import { CarouselModule } from '@sicatel/modules/carousel/carousel.module';
import * as fromCarousel from '@sicatel/modules/carousel/store/reducers/carousel.reducer';
import { MockModule } from 'ng-mocks';

describe('LoginLayout', () =>{

    let component: LoginLayoutComponent;
    let fixture: ComponentFixture<LoginLayoutComponent>;
    let store: MockStore<fromCarousel.State>;

    beforeEach(waitForAsync(()=>{

        TestBed.configureTestingModule({
            declarations: [LoginLayoutComponent],
            imports: [ HttpClientModule, RouterModule, MockModule(CarouselModule)],
            providers: [
                provideMockStore({
                     initialState : {
                         [fromCarousel.featureKey]: fromCarousel.initialState
                     }
                })
            ]
        }).compileComponents();

    }));

    beforeEach(() =>{
        fixture =  TestBed.createComponent(LoginLayoutComponent);
        component =  fixture.componentInstance;
        store =  TestBed.inject<MockStore<fromCarousel.State>>(MockStore);
        fixture.detectChanges();
    });

    afterEach(()=>{
        jest.clearAllMocks();
    });

    it('Should be created', () =>{
        expect(component).toBeTruthy();
    });

    it('Should be dispach init carousel', () =>{
        jest.spyOn(store,'dispatch');
        component.initConfigCarousel();
        expect(store.dispatch).toBeCalled();
    });

});
