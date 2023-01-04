import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DashboardService } from "@sicatel/core/http/dashboard/dashboard.service";
import * as DashboardActions from '@sicatel/modules/dashboard/store/actions/dashboard.actions';
import { IError } from "@sicatel/shared/models/request/error.interface";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { IDashboardSettings } from '@sicatel/modules/dashboard/models/dashboard-settings.interface';
import { UtilsService } from "@sicatel/core/services/utils/utils.service";

@Injectable()
export class DashboardEffects {

    constructor(private actions$: Actions, private dashboardService: DashboardService, private utilsService: UtilsService) {}

    loadCustomer$ = createEffect(() => this.actions$.pipe(
        ofType(DashboardActions.loadCustomer),
        exhaustMap(action => this.dashboardService.loadCustomer().pipe(
            map((response: IDashboardSettings) => DashboardActions.loadCustomerSuccess({ data: response })),
            catchError((error: IError) => of(DashboardActions.loadCustomerFailure({ error }))
            )
        ))
    ));

    actionFailure$ = createEffect(() => this.actions$.pipe(
        ofType(
            DashboardActions.loadCustomerFailure
        ),
        tap( (action) => this.utilsService.showErrorMessage(action.error))
    ), { dispatch: false });
}