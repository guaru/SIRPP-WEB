import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as DashboardActions from '@sicatel/modules/dashboard/store/actions/dashboard.actions';
import * as fromDashboard from '@sicatel/modules/dashboard/store/reducers/dashboard.reducer';
import * as DashboardSelectors from '@sicatel/modules/dashboard/store/selectors/dashboard.selectors';
import * as fromCarousel from '@sicatel/modules/carousel/store/reducers/carousel.reducer';
import * as CarouselActions from '@sicatel/modules/carousel/store/actions/carousel.actios';
import { ISliderConfig } from '@sicatel/shared/models/slider/slider-config.interface';



@Component({
  selector: 'sicatel-dashboard-container',
  templateUrl: './dashboard.container.html',
  styleUrls: ['./dashboard.container.scss']
})
export class DashboardContainer {
  messageToShow = 'This is a meesage from container';
  store$: Observable<{ state: fromDashboard.State }>;

  constructor(private store: Store<fromDashboard.State>, private storeCarousel: Store<fromCarousel.State>) {
    this.storeCarousel.dispatch(CarouselActions.init({ setting: { bgDefault: false,dark:true,height:300 } as ISliderConfig }));
    this.store$ = this.store.select(DashboardSelectors.selectDashoardState);
  }

  /**
   * Change customer Data Event
   *
   * @summary: Make a dispatch to load customer data
   * @returns: void
   */
  changeCustomerDataEvent(): void {
      this.store.dispatch(DashboardActions.loadCustomer());
  }
}
