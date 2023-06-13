import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDialogModule } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { IDetailConcept } from '@sicatel/shared/models/report/report-move';
import { IreportMoveDetail } from '@sicatel/shared/models/report/report-move';
import { IDetailMethodPayment } from '@sicatel/shared/models/report/report-move';

@Component({
  selector: 'sicatel-modal-detail-move',
  templateUrl: './modal-detail-move.component.html',
  styleUrls: ['./modal-detail-move.component.scss']
})
export class ModalDetailMoveComponent implements OnInit  {
  
  public title: string | undefined;
  public labelElim: string | undefined;
  public itemTable: any | undefined;
  displayedColumns: string[] = ['cCaja', 'cCantidad', 'cConcepto', 'cCuenta', 'cCuentaOriginal', 'cFacturaSap', 'cFolioIni',
   'cFolioFin','cNombreCliente','cRegionCliente','cTelefono','cTotal','cnumBatch','cIdPosicion',
   'cFolioEcac','cEstatus','cCodigoM2K','cNumeroOrden','cPlataforma','cEstatusBes'];
  dataSourceDetail = new MatTableDataSource<IDetailConcept>();

  displayedColumnsPayment: string[] = ['fTipoPago', 'fInstitucion', 'fEstatus', 'fAbonado', 'fNumDoc', 'fIdInstitucion'];
  dataSourceDetailPayment = new MatTableDataSource<IDetailMethodPayment>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef <ModalDetailMoveComponent>
  ) {}

  ngOnInit() {
    this.itemTable = this.data.data[0];
    console.log("itemTable ->",this.itemTable);
    this.dataSourceDetail = new MatTableDataSource<IDetailConcept>(this.itemTable.concepto);
    console.log("this.itemTable.concepto ->",this.itemTable.concepto);
    this.dataSourceDetailPayment = new MatTableDataSource<IDetailMethodPayment>(this.itemTable.formaPago);
    console.log("this.itemTable.formaPago ->",this.itemTable.formaPago);
  }

  /** Método para cerrar la modal **/
  closeModal(param: boolean): void {
    this.dialogRef.close(param);
  }
}
