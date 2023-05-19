import { SicatelMessages } from '@sicatel/configs/messsages.constant';
import { CarouselActions } from '@sicatel/modules/carousel/store';
import * as fromCarousel from '@sicatel/modules/carousel/store/reducers/carousel.reducer';
import { CarouselTestConstants } from '@sicatel/tests/configs/carousel-test.constants';
describe('Carousel Reducer', () =>{
    let customState: fromCarousel.State;

    describe('Load data Carousel', () => {
        beforeEach(()=>{
            customState  = {...fromCarousel.initialState};
        });

        afterEach(()=>{
            customState  = {...fromCarousel.initialState};
        });

        it('Should init config carousel', () =>{
            const result =  fromCarousel.carouselReducer(fromCarousel.initialState, CarouselActions.init({setting: CarouselTestConstants.config}));
            customState.setting =  CarouselTestConstants.config;
            expect(result).toEqual(customState);
        });

        it('Should load data', () =>{
            const result =  fromCarousel.carouselReducer(fromCarousel.initialState, CarouselActions.loadData());
            customState.loadings = true;
            expect(result).toEqual(customState);
        });

        it('Should  load data success', () =>{
            const result =  fromCarousel.carouselReducer(fromCarousel.initialState, CarouselActions.loadSuccess({data: CarouselTestConstants.sliderData}));
            customState.loadings = false;
            customState.data =  CarouselTestConstants.sliderData;
            expect(result).toEqual(customState);
        });
        it('Should  load data error', () =>{
            const result =  fromCarousel.carouselReducer(fromCarousel.initialState, CarouselActions.loadFailure({error: SicatelMessages.unexpectedError}));
            customState.loadings = false;
            customState.error =  SicatelMessages.unexpectedError;
            expect(result).toEqual(customState);
        });
    });
});
