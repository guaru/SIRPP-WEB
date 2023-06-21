import { Component, OnInit } from '@angular/core';
import { Store } from  '@ngrx/store';
import * as AuthenticationActions from '@sicatel/modules/authentication/store/actions/authentication.actions';
import * as fromAuthentication from '@sicatel/modules/authentication/store/reducers/authentication.reducers';

@Component({
  selector: 'sicatel-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  showMask = false;

  constructor(private store: Store<fromAuthentication.State>){}


  ngOnInit(): void {
    this.store.dispatch(AuthenticationActions.isAuthenticate());
  }

}
