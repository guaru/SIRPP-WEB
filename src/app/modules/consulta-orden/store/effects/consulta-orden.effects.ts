import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ConsultaOrdenService } from '@sicatel/core/http/consulta-orden/consulta-orden.service';
import { UtilsService } from '@sicatel/core/services/utils/utils.service';
import {ConsultaOrdenActions} from '@sicatel/modules/consulta-orden/store';
import { IOrdenDetailResponse } from '@sicatel/shared/models/consulta-orden/orden-detail-response.interface';
import { IError } from '@sicatel/shared/models/request/error.interface';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ConsultaOrdenEffects {

    consultaOrden$ = createEffect(() => this.actions$.pipe(
        ofType(ConsultaOrdenActions.consultaOrden),
        exhaustMap((request) => this.consultaOrdenService.consultaOrden(request.request).pipe(
            map((response: IOrdenDetailResponse) => ConsultaOrdenActions.consultaOrdenSuccess({ response })),
            catchError((error: IError) => of(ConsultaOrdenActions.consultaOrdenError({ error })))
        ))
    ));

    consultaOrdenError$ =  createEffect(() => this.actions$.pipe(
        ofType(ConsultaOrdenActions.consultaOrdenError),
        tap(error => this.utilService.showErrorMessage(error.error))
    ), {dispatch: false});


    constructor(private actions$: Actions, private consultaOrdenService: ConsultaOrdenService, private utilService: UtilsService) { }

}
