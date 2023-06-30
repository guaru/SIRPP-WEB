import { AfterViewInit, Component, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { EPlataformType } from '@sicatel/shared/enums/plataform-type.enum'
import { IreportMoveDetail } from '@sicatel/shared/models/report/report-move';
import { IReportRequest } from '@sicatel/shared/models/report/report-move';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TelcelErrorStateMatcher } from '@sicatel/configs/error-state-matcher';
import { Subscription } from 'rxjs';
import { ModalDetailMoveComponent } from '@sicatel/modules/reports/report-move/components/modals/modal-detail-move.component';
import { MatDialog } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { ReportMoveActions } from '@sicatel/modules/reports/report-move/store';
import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import { DatePipe, formatDate } from '@angular/common';
import * as fromAuthentication from '@sicatel/modules/authentication/store/reducers/authentication.reducers';
import * as AuthenticationSelectors from '@sicatel/modules/authentication/store/selectors/authentication.selectors';

@Component({
  selector: 'sicatel-report-move',
  templateUrl: './report-move.component.html',
  styleUrls: ['./report-move.component.scss']
})
export class ReportMoveComponent implements OnInit {

  myDatepipe!: DatePipe;

  constructor(private _dialog: MatDialog,private store: Store<fromAuthentication.State>) {
    this.storeSubscribe =  this.store.select(AuthenticationSelectors.selectAuthenticationStateLoading).subscribe( (loading)  => {
      this.loading = loading;
    });
  }

  loading?: boolean = false;
  matcher: TelcelErrorStateMatcher = new TelcelErrorStateMatcher();

  showTableDetail = false;
  ePlataformaType = EPlataformType;
  typesPlataforma: Array<EPlataformType> = [this.ePlataformaType.TODAS, this.ePlataformaType.MOBILE, this.ePlataformaType.BES];
  selectedType: string = this.ePlataformaType.TODAS;
  plataform:string = this.ePlataformaType.TODAS;
  storeSubscribe: Subscription = new Subscription();
  searchReportForm = new FormGroup({
    fechaInicio: new FormControl(formatDate(Date(), "yyyy-MM-dd", 'en-GB'), Validators.required),
    fechaFin: new FormControl(new Date(), Validators.required),
    type: new FormControl(this.ePlataformaType.TODAS, Validators.required)
  });

  displayedColumns: string[] = ['sec', 'folio', 'fecha-Hora', 'id-centro', 'id-region', 'folio-sicatel', 'plataforma', 'detalle'];
  dataSource = new MatTableDataSource<IreportMoveDetail>();
  selection = new SelectionModel<any>(true, []);
  ELEMENT_DATA: IreportMoveDetail[] = [];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit(): void {
    console.log("fecha value :  ", this.searchReportForm.controls.fechaInicio.value);

  }

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

    this.plataform = this.searchReportForm.controls.type.value || this.ePlataformaType.TODAS;

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
      const userRequest =  {
      } as IReportRequest;
      this.store.dispatch(ReportMoveActions.loadData({userRequest}));
      if (this.ELEMENT_DATA.length === 0) {
        Swal.fire({
          title: '',
          text: 'No se encontraron registros',
          icon: 'error',
          confirmButtonColor: '#f39c12',
          confirmButtonText: 'Aceptar',
          footer: ''
        });
      } else {
        this.showTableDetail = true;
        this.dataSource = new MatTableDataSource<IreportMoveDetail>(this.ELEMENT_DATA);
      }
    }
  }
  
  openModalShowDetail(data: any): void {
    //TODO definir selection
    let dataObject: any = { 'data': (data !== null ? [data] : this.selection.selected) };
    const dialogRef = this._dialog.open(ModalDetailMoveComponent, {
      panelClass: 'custom-dialog-container-user',
      width: ('120%'),
      data: dataObject,
      disableClose: true
    });
  }



}

