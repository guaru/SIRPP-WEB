import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { MemoizedSelector, select } from "@ngrx/store";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { CarouselComponent } from "@sicatel/modules/carousel/components/carousel.component";
import { CarouselContainer } from "@sicatel/modules/carousel/containers/carousel.container";
import * as fromCarousel from '@sicatel/modules/carousel/store/reducers/carousel.reducer';
import * as CarouselSelectors from '@sicatel/modules/carousel/store/selectors/carousel.selectors';
import { MockComponent } from "ng-mocks";

describe('CarouselContainer', () => {
    let store: MockStore<fromCarousel.State>;
    let component: CarouselContainer;
    let fixture: ComponentFixture<CarouselContainer>;
    let selector: MemoizedSelector<{ state: fromCarousel.State }, { state: fromCarousel.State }>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CarouselContainer, MockComponent(CarouselComponent)],
            imports: [
                CommonModule
            ],
            providers: [
                provideMockStore({
                    initialState: {
                        [fromCarousel.featureKey]: fromCarousel.initialState
                    }
                })
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CarouselContainer);
        component = fixture.componentInstance;
        store = TestBed.inject<MockStore<fromCarousel.State>>(MockStore);
        selector = store.overrideSelector(CarouselSelectors.selectCarouselState, { state: fromCarousel.initialState });
        fixture.detectChanges();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should dispatch load data', () => {
        jest.spyOn(store, 'dispatch');
        component.loadData();
        expect(store.dispatch).toBeCalled();
    });

});