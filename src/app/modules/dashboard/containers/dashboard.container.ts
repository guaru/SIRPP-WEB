import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CarouselActions from '@sicatel/modules/carousel/store/actions/carousel.actios';
import * as fromCarousel from '@sicatel/modules/carousel/store/reducers/carousel.reducer';
import * as fromDashboard from '@sicatel/modules/dashboard/store/reducers/dashboard.reducer';
import * as DashboardSelectors from '@sicatel/modules/dashboard/store/selectors/dashboard.selectors';
import { ISliderConfig } from '@sicatel/shared/models/slider/slider-config.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'sicatel-dashboard-container',
  templateUrl: './dashboard.container.html',
  styleUrls: ['./dashboard.container.scss']
})
export class DashboardContainer {
  store$: Observable<{ state: fromDashboard.State }>;

  constructor(private store: Store<fromDashboard.State>, private storeCarousel: Store<fromCarousel.State>) {
    this.storeCarousel.dispatch(CarouselActions.init({ setting: { bgDefault: false,dark:true,height:500 } as ISliderConfig }));
    this.store$ = this.store.select(DashboardSelectors.selectDashoardState);
  }

}
