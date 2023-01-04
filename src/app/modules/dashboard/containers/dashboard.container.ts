import { Component, OnInit } from '@angular/core';
import { IDashboardSettings } from '@sicatel/modules/dashboard/models/dashboard-settings.interface';
import { Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import * as DashboardSelectors from '@sicatel/modules/dashboard/store/selectors/dashboard.selectors';
import * as fromDashboard from '@sicatel/modules/dashboard/store/reducers/dashboard.reducer';
import * as DashboardActions from '@sicatel/modules/dashboard/store/actions/dashboard.actions';

@Component({
  selector: 'sicatel-dashboard-container',
  templateUrl: './dashboard.container.html',
  styleUrls: ['./dashboard.container.scss']
})
export class DashboardContainer{
  messageToShow = 'This is a meesage from container';
  dashboardSettings = {} as IDashboardSettings;

  store$: Observable<{ state: fromDashboard.State }>;

  constructor(private store: Store<{ state: fromDashboard.State }>) {
    this.store$ = this.store.select(DashboardSelectors.selectDashoardState).pipe(
      tap((st: { state: fromDashboard.State }) => {
        this.dashboardSettings = {
          age: st.state.age,
          name: st.state.name,
          role: st.state.role
        };
      })
    );
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
