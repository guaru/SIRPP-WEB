import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ReportmoveService } from '@sicatel/core/http/report/report-move/reportmove.service';
import { UtilsService } from '@sicatel/core/services/utils/utils.service';
import * as ReporMoveActions from '@sicatel/modules/reports/report-move/store/actions/report-move.actios';
import { IError } from '@sicatel/shared/models/request/error.interface';
import { ISlider } from '@sicatel/shared/models/slider/slider.interface';
import { IreportMoveDetail } from '@sicatel/shared/models/report/report-move';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { IUserRequest } from '@sicatel/shared/models/request/user.interface';
import { IUserResponse } from '@sicatel/shared/models/response/user.response';

@Injectable()
export class ReporMoveEffects {

   
    loadDataeffect$ = createEffect(() => this.actions$.pipe(
        ofType(ReporMoveActions.loadData),
        exhaustMap((({ userRequest }) => this.reportMoveService.loadData(userRequest).pipe(
            map((data:  Array<IreportMoveDetail>) => ReporMoveActions.loadSuccess({ data })),
            catchError((error: IError) => of(ReporMoveActions.loadFailure({ error })))
        ))
    )));

    loadFailure$ = createEffect(() => this.actions$.pipe(
        ofType(
            ReporMoveActions.loadFailure
        ),
        tap(({ error }) =>
            this.utilService.showErrorMessage(error)
        )
    ), { dispatch: false });

//reportMoveService, sliderService
    constructor(private actions$: Actions, private reportMoveService: ReportmoveService, private utilService: UtilsService) { }

}
