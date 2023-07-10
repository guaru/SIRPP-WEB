import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import  * as fromReportMove from '@sicatel/modules/reports/report-move/store/reducers/report-move.reducer';
import { Observable } from 'rxjs';
import { IToken } from '@sicatel/shared/models/user/user';
import * as AuthenticationSelectors from '@sicatel/modules/authentication/store/selectors/authentication.selectors';

@Component({
  selector: 'report-move.-container',
  templateUrl: './report-move.container.html',
  styleUrls: ['./report-move.container.scss']
})
export class ReportMoveContainer  {

  token$!: Observable<IToken>;

  constructor(private store: Store<fromReportMove.State>, ) {
    this.token$= this.store.select(AuthenticationSelectors.selectAuthenticationToken);
  }
  
}
