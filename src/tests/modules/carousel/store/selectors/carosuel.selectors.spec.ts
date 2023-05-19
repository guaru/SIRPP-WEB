import * as fromCarousel from '@sicatel/modules/carousel/store/reducers/carousel.reducer';
import * as CarouselSelectors from '@sicatel/modules/carousel/store/selectors/carousel.selectors';

describe('Carosuel Selectors', () =>{

    it('should select carousel',() =>{
        const result =  CarouselSelectors.selectCarouselState({
            [fromCarousel.featureKey] : fromCarousel.initialState
        });

        expect(result).toBeTruthy();
    });
});
