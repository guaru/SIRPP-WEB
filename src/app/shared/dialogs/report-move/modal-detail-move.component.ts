import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { IInfoConceptoList } from '@sicatel/shared/models/report/report-move';
import { IMovimiento } from '@sicatel/shared/models/report/report-move';
import { IInfoFormaList } from '@sicatel/shared/models/report/report-move';

@Component({
  selector: 'sicatel-modal-detail-move',
  templateUrl: './modal-detail-move.component.html',
  styleUrls: ['./modal-detail-move.component.scss']
})
export class ModalDetailMoveComponent implements OnInit  {

  title!: string;
  labelElim!: string ;
  itemTable!: IMovimiento ;
  displayedColumns: Array<string>= ['cCaja', 'cCantidad', 'cConcepto', 'cCuenta', 'cCuentaOriginal', 'cFacturaSap', 'cFolioIni',
   'cFolioFin','cNombreCliente','cRegionCliente','cTelefono','cTotal','cnumBatch','cIdPosicion',
   'cFolioEcac','cEstatus','cCodigoM2K','cNumeroOrden','cPlataforma','cEstatusBes'];
  dataSourceDetail = new MatTableDataSource<IInfoConceptoList>();

  displayedColumnsPayment: Array<string>= ['fTipoPago', 'fInstitucion', 'fEstatus', 'fAbonado', 'fNumDoc', 'fIdInstitucion'];
  dataSourceDetailPayment = new MatTableDataSource<IInfoFormaList>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IMovimiento,
    public dialogRef: MatDialogRef <ModalDetailMoveComponent>
  ) {}

  ngOnInit() {
    this.itemTable = this.data;
    this.dataSourceDetail = new MatTableDataSource<IInfoConceptoList>(this.itemTable.infoConceptoList);
    this.dataSourceDetailPayment = new MatTableDataSource<IInfoFormaList>(this.itemTable.infoFormaList);
  }

  /*** Close modal
   *
   * @summary Event for close modal
   * @param param: boolean
   * @returns void
   */
  closeModal(param: boolean): void {
    this.dialogRef.close(param);
  }
}
