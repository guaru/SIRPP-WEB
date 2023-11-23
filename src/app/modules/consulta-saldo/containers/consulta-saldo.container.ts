import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { SicatelMessages } from '@sicatel/configs/messsages.constant';
import { UtilsService } from '@sicatel/core/services/utils/utils.service';
import { ConsultaSaldoModalComponent } from '@sicatel/modules/consulta-saldo/components/consulta-saldo-modal.component';
import { ConsultaSaldoActions, ConsultaSaldoSelectors, fromConsultaSaldo } from '@sicatel/modules/consulta-saldo/store';
import { IConsultaSaldoRequest } from '@sicatel/shared/models/consulta-saldo/consulta-saldo-request.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'sicatel-consulta-saldo-container',
  templateUrl: './consulta-saldo.container.html',
  styleUrls: ['./consulta-saldo.container.scss']
})
export class ConsultaSaldoContainer implements OnInit, OnDestroy {

   configDialog = {
    hasBackdrop: true,
    disableClose: true,
    width: '30%',
    position: {
        top: '5%'
    },
    data: {} as IConsultaSaldoRequest
} as MatDialogConfig;

  state$: Observable<{ state: fromConsultaSaldo.State }>;
  cuenta = '';
  telefono = '';

  constructor(public dialog: MatDialog, private store$: Store<fromConsultaSaldo.State>, private utilService: UtilsService) {
    this.state$ = store$.select(ConsultaSaldoSelectors.selectConsultaSaldoState);
  }

  ngOnDestroy(): void {
    this.store$.dispatch(ConsultaSaldoActions.consultaSaldoReset());
  }

  ngOnInit(): void {
    this.store$.dispatch(ConsultaSaldoActions.consultaSaldoDisabledConsulta());
    const dialogRef = this.dialog.open(ConsultaSaldoModalComponent, this.configDialog);
    dialogRef.afterClosed().subscribe((result: IConsultaSaldoRequest) => {
      if (result) {
        this.telefono = result.telefono;
        this.cuenta = result.cuenta;
        this.onConsulta(result);
      }
    });
  }

  /**
   * Consulta saldo
   *
   * @summary Consulta saldos
   * @param filters
   */
  onConsulta(filters: IConsultaSaldoRequest): void {
    this.telefono = filters.telefono;
    this.cuenta = filters.cuenta;
    if (this.isValidFilters(filters)) {
      this.store$.dispatch(ConsultaSaldoActions.consultaSaldo({ request: filters }));
    }
  }

  /**
   * Consulta complementos bes
   *
   * @summary Consulta complementos bes, facturacion, cobranza, telecomunicaciones y servicios
   * @param filters
   */
  onConsultaComplemento(filters: IConsultaSaldoRequest): void {
    this.telefono = filters.telefono;
    this.cuenta = filters.cuenta;
    if (this.isValidFilters(filters)) {
      this.store$.dispatch(ConsultaSaldoActions.consultaComplemento({ request: filters }));
    }
  }

  /**
   * Reset data consulta saldo
   *
   * @summary Reset data consulta saldo
   * @returns
   */
  onReset(): void {
    this.telefono = '';
    this.cuenta = '';
    this.store$.dispatch(ConsultaSaldoActions.consultaSaldoReset());
  }

  /**
   * Valida filtros consulta saldo
   *
   * @summary Valida filtros para consulta de saldo, debe capturar minimo uno
   * @returns boolean
   */
  isValidFilters(filters: IConsultaSaldoRequest): boolean {
    if (this.utilService.isEmpty(filters.cuenta) && this.utilService.isEmpty(filters.telefono)) {
      this.utilService.showErrorMessage(SicatelMessages.errorEmptyAccountOrPhone);
      return false;
    } else {
      return true;
    }
  }

}
