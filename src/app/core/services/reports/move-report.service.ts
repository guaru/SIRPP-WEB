import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SicatelMessages } from '@sicatel/configs/messsages.constant';
import * as ReporMoveActions from '@sicatel/modules/reports/report-move/store/actions/report-move.actios';
import * as fromAuthentication from '@sicatel/modules/authentication/store/reducers/authentication.reducers';
import { IreportResponse } from '@sicatel/shared/models/report/report-move';
@Injectable({
  providedIn: 'root'
})
export class MoveReportService {
  

  constructor(private store: Store<fromAuthentication.State>) {}

  /**
   * Authenticated logic for report move
   *
   * @summary Make loadSuccess
   * @param user:IUserResponse
   * @returns void
   */
  loadSuccess(reportResponse: IreportResponse): void {
    console.log("reportResponse ", reportResponse);
      if(reportResponse!) {
            this.store.dispatch(ReporMoveActions.loadSuccess({  reportResponse }))
      } else {
          this.store.dispatch(ReporMoveActions.loadFailure({error : SicatelMessages.errorGeneral }));
      }
  }


}
