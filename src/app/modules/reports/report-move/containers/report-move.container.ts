import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import  * as ReportMoveActions from '@sicatel/modules/reports/report-move/store/actions/report-move.actios';
import  * as fromReportMove from '@sicatel/modules/reports/report-move/store/reducers/report-move.reducer';
import  * as ReportMoveSelector from  '@sicatel/modules/reports/report-move/store/selectors/report-move.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'report-move.-container',
  templateUrl: './report-move.container.html',
  styleUrls: ['./report-move.container.scss']
})
export class ReportMoveContainer implements OnInit {
  store$: Observable<{ state: fromReportMove.State}>;

  constructor(private store: Store<fromReportMove.State>) {
    this.store$ = this.store.select(ReportMoveSelector.selectReportMoveState);
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
   
    this.store.dispatch(ReportMoveActions.init());
  }

}
