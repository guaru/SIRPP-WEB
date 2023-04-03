import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import  * as fromCarousel from '@sicatel/modules/carousel/store/reducers/carousel.reducer';
import  * as CarouselActions from '@sicatel/modules/carousel/store/actions/carousel.actios';
import  * as CarouselSelectors from  '@sicatel/modules/carousel/store/selectors/carousel.selectors';
import { SliderConfig } from '@sicatel/shared/models/slider/slider-config.interface';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'sicatel-carousel-container',
  templateUrl: './carousel.container.html'
})
export class CarouselContainer implements OnInit {

   store$ : Observable<{ state: fromCarousel.State}>;

  constructor(private store: Store<fromCarousel.State>) { 
    this.store$ = this.store.select(CarouselSelectors.selectCarouselState);
  }

  ngOnInit(): void {
    this.store.dispatch(CarouselActions.init({ setting: { bgDefault: true,dark:true,height:200 } as SliderConfig }));
    this.store.dispatch(CarouselActions.loadData());
  }
  
}
