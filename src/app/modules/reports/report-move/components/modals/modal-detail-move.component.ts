import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDialogModule } from '@angular/material/dialog';
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
  
  public title: string | undefined;
  public labelElim: string | undefined;
  public itemTable: any | undefined;
  displayedColumns: string[] = ['cCaja', 'cCantidad', 'cConcepto', 'cCuenta', 'cCuentaOriginal', 'cFacturaSap', 'cFolioIni',
   'cFolioFin','cNombreCliente','cRegionCliente','cTelefono','cTotal','cnumBatch','cIdPosicion',
   'cFolioEcac','cEstatus','cCodigoM2K','cNumeroOrden','cPlataforma','cEstatusBes'];
  dataSourceDetail = new MatTableDataSource<IInfoConceptoList>();

  displayedColumnsPayment: string[] = ['fTipoPago', 'fInstitucion', 'fEstatus', 'fAbonado', 'fNumDoc', 'fIdInstitucion'];
  dataSourceDetailPayment = new MatTableDataSource<IInfoFormaList>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef <ModalDetailMoveComponent>
  ) {}

  ngOnInit() {
    this.itemTable = this.data.data[0];
    console.log("itemTable ->",this.itemTable.infoConceptoList);
    this.dataSourceDetail = new MatTableDataSource<IInfoConceptoList>(this.itemTable.infoConceptoList);
    console.log("this.itemTable.concepto ->",this.itemTable.infoConceptoList);
    this.dataSourceDetailPayment = new MatTableDataSource<IInfoFormaList>(this.itemTable.infoFormaList);
    console.log("this.itemTable.formaPago ->",this.itemTable.infoFormaList);
  }

  /** Método para cerrar la modal **/
  closeModal(param: boolean): void {
    this.dialogRef.close(param);
  }
}
