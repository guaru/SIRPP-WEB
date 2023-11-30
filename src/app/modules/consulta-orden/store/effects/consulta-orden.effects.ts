import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ConsultaOrdenService } from '@sicatel/core/http/consulta-orden/consulta-orden.service';
import { IOrdenDetailResponse } from '@sicatel/shared/models/consulta-orden/orden-detail-response.interface';
import { IError } from '@sicatel/shared/models/request/error.interface';
import { catchError, exhaustMap, map, of } from 'rxjs';

import { ConsultaOrdenActions } from '..';


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

    constructor(private actions$: Actions, private consultaOrdenService: ConsultaOrdenService) { }

}
