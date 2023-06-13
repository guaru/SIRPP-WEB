import { AfterViewInit, Component, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { EPlataformType } from '@sicatel/shared/enums/plataform-type.enum'
import { IreportMoveDetail } from '@sicatel/shared/models/report/report-move';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TelcelErrorStateMatcher } from '@sicatel/configs/error-state-matcher';
import { Subscription } from 'rxjs';
import { ModalDetailMoveComponent } from './modals/modal-detail-move.component';
import { MatDialog } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { UtilsService } from '@sicatel/core/services/utils/utils.service';
import Swal  from 'sweetalert2';

@Component({
  selector: 'sicatel-report-move',
  templateUrl: './report-move.component.html',
  styleUrls: ['./report-move.component.scss']
})
export class ReportMoveComponent {

  constructor( private _dialog: MatDialog) {}

  loading?: boolean = false;
  matcher: TelcelErrorStateMatcher = new TelcelErrorStateMatcher();

  showTableDetail = false;
  ePlataformaType = EPlataformType;
  typesPlataforma: Array<EPlataformType> = [this.ePlataformaType.TODAS, this.ePlataformaType.MOBILE, this.ePlataformaType.BES];
  selectedType: string = this.ePlataformaType.TODAS;
  plataform = this.ePlataformaType.TODAS;
  storeSubscribe: Subscription = new Subscription();
  searchReportForm = new FormGroup({
    fechaInicio: new FormControl(new Date(), Validators.required),
    fechaFin: new FormControl(new Date(), Validators.required),
    type: new FormControl(this.ePlataformaType.TODAS, Validators.required)
  });
  displayedColumns: string[] = ['sec', 'folio', 'fecha-Hora', 'id-centro', 'id-region', 'folio-sicatel', 'plataforma', 'detalle'];
  dataSource = new MatTableDataSource<IreportMoveDetail>();
  selection = new SelectionModel<any>(true, []);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.storeSubscribe.unsubscribe();
  }

  /**
   * Control change type plataform
   *
   * @summary Make change type 
   * @returns void
   */
  changeType(): void {
    //this.selectedType = this.searchReportForm.controls.plataform.value || this.ePlataformaType.TODAS;
    this.searchReportForm.controls.fechaInicio.updateValueAndValidity();
    this.searchReportForm.controls.fechaFin.updateValueAndValidity();
    this.plataform = this.searchReportForm.controls.type.value || this.ePlataformaType.TODAS ;
    
  }

  /**
  * 
  *
  * @summary:  into the application
  * @returns void
  */
  onSubmit(): void {

    if (this.searchReportForm.valid) {
      console.log("data validate: ", this.searchReportForm)
      //this.store.dispatch(AuthenticationActions.signIn({userRequest}));
      if (ELEMENT_DATA.length===0) {
        Swal.fire({
          title: '',
          text : 'No se encontraron registros',
          icon: 'error',
          confirmButtonColor: '#f39c12',
          confirmButtonText: 'Aceptar',
          footer: ''
      });
      }else{
        this.showTableDetail= true;
        this.dataSource = new MatTableDataSource<IreportMoveDetail>(ELEMENT_DATA);
      }
      
      
    }
    
  }


  openModalShowDetail(data: any): void{
    //TODO definir selection
    let dataObject: any = { 'data': (data !== null? [data]: this.selection.selected) };
    const dialogRef = this._dialog.open(ModalDetailMoveComponent,{
      panelClass:'custom-dialog-container-user',
      width: ('120%'),
      data: dataObject,
      disableClose: true
});
  }

}

//const ELEMENT_DATA: IreportMoveDetail[] =[];

const ELEMENT_DATA: IreportMoveDetail[] =
[
  
  {
    folio: 1, fecha: '09-24-2024 09:44:21', idCentro: 10079, idRegion: 111, folioSicatel: 111111, plataforma: 'BES', concepto: [
      {
        cCaja: 'detalle1',
        cCantidad: 'detalle1',
        cConcepto: 'detalle1',
        cCuenta: 'detalle1',
        cCuentaOriginal: 'detalle1',
        cFacturaSap: 'detalle1',
        cFolioIni: 'detalle1',
        cFolioFin: 'detalle1',
        cNombreCliente: 'detalle1',
        cRegionCliente: 'detalle1',
        cTelefono: 'detalle1',
        cTotal: 'detalle1',
        cnumBatch: 'detalle1',
        cIdPosicion: 'detalle1',
        cFolioEcac: 'detalle1',
        cEstatus: 'detalle1',
        cCodigoM2K: 'detalle1',
        cNumeroOrden: 'detalle1',
        cPlataforma: 'detalle1',
        cEstatusBes: 'detalle1'
      }
    ],formaPago:[
      {
        fTipoPago: 1,
        fInstitucion: '1',
        fEstatus: 2,
        fAbonado: 1000.00,
        fNumDoc: 111101,
        fIdInstitucion: '001',
      }
    ]
  },
  {
    folio: 2, fecha: '08/21/2024 04:24:37', idCentro: 10079, idRegion: 111, folioSicatel: 111111, plataforma: 'BES', concepto: [
      {
        cCaja: 'detalle1',
        cCantidad: 'detalle1',
        cConcepto: 'detalle1',
        cCuenta: 'detalle1',
        cCuentaOriginal: 'detalle1',
        cFacturaSap: 'detalle1',
        cFolioIni: 'detalle1',
        cFolioFin: 'detalle1',
        cNombreCliente: 'detalle1',
        cRegionCliente: 'detalle1',
        cTelefono: 'detalle1',
        cTotal: 'detalle1',
        cnumBatch: 'detalle1',
        cIdPosicion: 'detalle1',
        cFolioEcac: 'detalle1',
        cEstatus: 'detalle1',
        cCodigoM2K: 'detalle1',
        cNumeroOrden: 'detalle1',
        cPlataforma: 'detalle1',
        cEstatusBes: 'detalle1'
      }
    ],formaPago:[
      {
        fTipoPago: 1,
        fInstitucion: '1',
        fEstatus: 2,
        fAbonado: 1000.00,
        fNumDoc: 111101,
        fIdInstitucion: '001',
      }
    ]
  },
  {
    folio: 3, fecha: '09/21/2024 04:24:37', idCentro: 10079, idRegion: 111, folioSicatel: 111111, plataforma: 'BES', concepto: [
      {
        cCaja: 'detalle1',
        cCantidad: 'detalle1',
        cConcepto: 'detalle1',
        cCuenta: 'detalle1',
        cCuentaOriginal: 'detalle1',
        cFacturaSap: 'detalle1',
        cFolioIni: 'detalle1',
        cFolioFin: 'detalle1',
        cNombreCliente: 'detalle1',
        cRegionCliente: 'detalle1',
        cTelefono: 'detalle1',
        cTotal: 'detalle1',
        cnumBatch: 'detalle1',
        cIdPosicion: 'detalle1',
        cFolioEcac: 'detalle1',
        cEstatus: 'detalle1',
        cCodigoM2K: 'detalle1',
        cNumeroOrden: 'detalle1',
        cPlataforma: 'detalle1',
        cEstatusBes: 'detalle1'
      }
    ],formaPago:[
      {
        fTipoPago: 1,
        fInstitucion: '1',
        fEstatus: 2,
        fAbonado: 1000.00,
        fNumDoc: 111101,
        fIdInstitucion: '001',
      }
    ]
  }
]

/*
@Pipe({ name: "reversed" })
export class ReverseStr implements PipeTransform {
  transform(value: string): Date {
    const letra= parse(value, 'MM-dd-yyyy hh:mm:ss', new Date());
    return letra;
  }
}*/