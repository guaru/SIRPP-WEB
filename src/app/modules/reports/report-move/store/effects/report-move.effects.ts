import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ReportMoveService } from '@sicatel/core/http/report/report-move/reportmove.service';
import { UtilsService } from '@sicatel/core/services/utils/utils.service';
import * as ReporMoveActions from '@sicatel/modules/reports/report-move/store/actions/report-move.actios';
import { IError } from '@sicatel/shared/models/request/error.interface';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { IreportResponse } from '@sicatel/shared/models/report/report-move';
import { MoveReportService } from '@sicatel/core/services/reports/move-report.service';

@Injectable()
export class ReporMoveEffects {

    constructor(private actions$: Actions, private reportMoveService: ReportMoveService, private utilService: UtilsService ,
        private getReportMoveService: MoveReportService) { }

    loadData$ = createEffect(() => this.actions$.pipe(
        ofType(ReporMoveActions.loadData),
        exhaustMap(({ reportRequest }) => this.reportMoveService.loadDataReport(reportRequest).pipe(
          map((reportResponse: IreportResponse) => ReporMoveActions.loadSuccess({ reportResponse })),
          catchError((error: IError) => of(ReporMoveActions.loadFailure({ error })))
        ))));
    
    loadSuccess$ = createEffect(() => this.actions$.pipe(
      ofType(ReporMoveActions.loadSuccess),
      tap(({ reportResponse  }) => this.getReportMoveService.loadSuccess(reportResponse))
    ), { dispatch: false });

    loadFailure$ = createEffect(() => this.actions$.pipe(
        ofType(ReporMoveActions.loadFailure),
        tap(({ error }) => { this.utilService.showErrorMessage(error); })
      ), { dispatch: false });
    

}
