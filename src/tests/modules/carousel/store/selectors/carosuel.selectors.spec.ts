import * as CarouselSelectors from '@sicatel/modules/carousel/store/selectors/carousel.selectors';
import * as fromCarousel from '@sicatel/modules/carousel/store/reducers/carousel.reducer';

describe('Carosuel Selectors', () =>{

    it('Should select carousel',() =>{
        const result =  CarouselSelectors.selectCarouselState({
            [fromCarousel.featureKey] : fromCarousel.initialState
        });

        expect(result).toBeTruthy();
    });

});