import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCarousel from  '@sicatel/modules/carousel/store/reducers/carousel.reducer';


export const selectReferenceCarouselState = createFeatureSelector<fromCarousel.State>(fromCarousel.featureKey);
export const selectCarouselState = createSelector(
            selectReferenceCarouselState,
            (state: fromCarousel.State) => ({
                state
            })
            );