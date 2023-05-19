import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import  * as CarouselActions from '@sicatel/modules/carousel/store/actions/carousel.actios';
import  * as fromCarousel from '@sicatel/modules/carousel/store/reducers/carousel.reducer';
import  * as CarouselSelectors from  '@sicatel/modules/carousel/store/selectors/carousel.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'sicatel-carousel-container',
  templateUrl: './carousel.container.html'
})
export class CarouselContainer implements OnInit {

   store$: Observable<{ state: fromCarousel.State}>;

  constructor(private store: Store<fromCarousel.State>) {
    this.store$ = this.store.select(CarouselSelectors.selectCarouselState);
  }

  ngOnInit(): void {
    this.loadData();
  }

  /**
   * Load data carousel
   *
   * @summary Load data for carousel dispatch
   * @returns void
   */
  loadData(): void {
    this.store.dispatch(CarouselActions.loadData());
  }

}
