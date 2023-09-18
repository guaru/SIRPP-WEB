import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { signOff } from '@sicatel/modules/authentication/store/actions/authentication.actions';
import * as MenuActions from '@sicatel/modules/navbar/store/actions/menu.actions';
import * as fromMenu from '@sicatel/modules/navbar/store/reducers/menu.reducers';
import * as MenuSelectors from '@sicatel/modules/navbar/store/selectors/menu.selectors';
import { IUser } from '@sicatel/shared/models/user/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'sicatel-navbar-container',
  templateUrl: './navbar.container.html',
  styleUrls: ['./navbar.container.scss']
})
export class SicatelNavbarContainer implements OnInit {

  store$: Observable<{
    state: fromMenu.State;
    user: IUser;
  }>;

  constructor(private store: Store) {
    this.store$ = this.store.select(MenuSelectors.selectMenuStateWithUserInfo);
  }

  ngOnInit(): void {
    this.store.dispatch(MenuActions.loadMenu());
  }

  /**
   * Sign Off
   *
   * @summary Sign off the app
   * @returns void
   */
    signOff(): void {
      this.store.dispatch(signOff());
  }
}
