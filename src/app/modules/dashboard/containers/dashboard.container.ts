import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as DashboardActions from '@sicatel/modules/dashboard/store/actions/dashboard.actions';
import * as fromDashboard from '@sicatel/modules/dashboard/store/reducers/dashboard.reducer';
import * as DashboardSelectors from '@sicatel/modules/dashboard/store/selectors/dashboard.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'sicatel-dashboard-container',
  templateUrl: './dashboard.container.html',
  styleUrls: ['./dashboard.container.scss']
})
export class DashboardContainer {
  messageToShow = 'This is a meesage from container';
  store$: Observable<{ state: fromDashboard.State }>;

  constructor(private store: Store<fromDashboard.State>) {
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
