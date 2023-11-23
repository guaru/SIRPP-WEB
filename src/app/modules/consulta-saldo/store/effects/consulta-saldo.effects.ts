import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SicatelMessages } from '@sicatel/configs/messsages.constant';
import { ConsultaSaldoService } from '@sicatel/core/http/consulta-saldo/consulta-saldo.service';
import { UtilsObjects } from '@sicatel/core/services/utils/utils-objects.service';
import { UtilsService } from '@sicatel/core/services/utils/utils.service';
import {
    ConsultaSaldoActions
} from '@sicatel/modules/consulta-saldo/store';
import { ISaldo } from '@sicatel/shared/models/consulta-saldo/saldo.interface';
import { ISaldos } from '@sicatel/shared/models/consulta-saldo/saldos.interface';
import { IError } from '@sicatel/shared/models/request/error.interface';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';

@Injectable()
export class ConsultaSaldoEffects {

    consultaSaldo$ = createEffect(() => this.actions$.pipe(
        ofType(ConsultaSaldoActions.consultaSaldo),
        exhaustMap((request) => this.consultaSaldoService.consultaSaldo(request.request).pipe(
            map((saldos: ISaldos) => ConsultaSaldoActions.consultaSaldoSuccess({saldos: this.validateErrorBussiness(saldos) })),
            catchError((error: IError) => of(ConsultaSaldoActions.consultaSaldoFaild({ error })))
        ))
    ));

    consultaSaldoFaild$ = createEffect(() => this.actions$.pipe(
        ofType(ConsultaSaldoActions.consultaSaldoFaild),
        tap(error => this.utilService.showErrorMessage(error.error))
    ), { dispatch: false });

    consultaComplemento$ = createEffect(() => this.actions$.pipe(
        ofType(ConsultaSaldoActions.consultaComplemento),
        exhaustMap((request) => this.consultaSaldoService.consultaComplemento(request.request).pipe(
            map((saldo: ISaldo) => ConsultaSaldoActions.consultaComplementoSuccess({ saldo })),
            catchError((error: IError) => of(ConsultaSaldoActions.consultaComplementoFaild({ error })))
        ))
    ));

    consultaComplementoFaild$ = createEffect(() => this.actions$.pipe(
        ofType(ConsultaSaldoActions.consultaComplementoFaild),
        tap(() => this.utilService.showErrorMessage(SicatelMessages.errorCsComplement))
    ), { dispatch: false });

    constructor(private actions$: Actions,
        private consultaSaldoService: ConsultaSaldoService, private utilService: UtilsService) { }

    private validateErrorBussiness(saldos: ISaldos): ISaldos {
        if (saldos.error) {
            this.utilService.showErrorMessage({ title: 'Atención', message: saldos.message, code: 'RB-000' } as IError);
        }
        if (!UtilsObjects.isEmpty(saldos.cuentaResponsabilidadPago)) {
            this.utilService.showInfoMessage(SicatelMessages.infoResponsabilidadPago);
        }
        return saldos;
    }
}
