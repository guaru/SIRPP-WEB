import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { Action } from "@ngrx/store";
import { SicatelMessages } from "@sicatel/configs/messsages.constant";
import { SliderService } from "@sicatel/core/http/slider/slider.service";
import { UtilsService } from "@sicatel/core/services/utils/utils.service";
import { CarouselActions } from "@sicatel/modules/carousel/store";
import { CarouselEffects } from "@sicatel/modules/carousel/store/effects/carousel.effects";
import { CarouselTestConstants } from "@sicatel/tests/configs/carousel-test.constants";
import { SicatelTestMessages } from "@sicatel/tests/configs/messages-test.constants";
import { Observable, of, throwError } from "rxjs";

describe('Carousel Effects', () =>{
    const sliderSpy = {loadData: jest.fn()};
    const utilServiceSpy = { showErrorMessage: jest.fn() };
    let actions$: Observable<Action>;
    let effects: CarouselEffects;

    beforeEach(() =>{
        TestBed.configureTestingModule({
            providers: [
                CarouselEffects,
                provideMockActions(() => actions$),
                {
                    provide: SliderService,
                    userValue: sliderSpy
                },
                {
                    provide: UtilsService,
                    useValue: utilServiceSpy
                }
            ],
            imports: [HttpClientModule]
            
        });

        effects =  TestBed.inject(CarouselEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });

    describe('Load data slider actions', () =>{
         
        it('Should dispatch a success effect', () =>{
            actions$ =  of(CarouselActions.loadData());
            sliderSpy.loadData.mockReturnValue(of(CarouselTestConstants.sliderData));

            effects.loadDataeffect$.subscribe(action =>{
                expect(sliderSpy.loadData.mock.calls.length).toBe(1);
                expect(action).toEqual(CarouselActions.loadSuccess({data: CarouselTestConstants.sliderData}));
            });
        });

        it('Should dispatch an error', () =>{
            actions$ = of(CarouselActions.loadData());
            sliderSpy.loadData.mockReturnValue(throwError(() => SicatelTestMessages.unexpectedError));

            effects.loadDataeffect$.subscribe(action =>{
                expect(sliderSpy.loadData.mock.calls.length).toBe(1);
                expect(action).toEqual(CarouselActions.loadFailure({error: SicatelMessages.unexpectedError}));
            });
        });


        it('should dispatch a falure effect', () => {
            actions$ = of(CarouselActions.loadFailure({ error: SicatelTestMessages.unexpectedError }));
            effects.loadFailure$.subscribe(action => {
                expect(utilServiceSpy.showErrorMessage).toBeCalled();
            });
        });

    });

});