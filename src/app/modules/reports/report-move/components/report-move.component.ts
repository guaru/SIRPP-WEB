import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription, } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { ModalDetailMoveComponent } from '@sicatel/modules/reports/report-move/components/modals/modal-detail-move.component';
import { TelcelErrorStateMatcher } from '@sicatel/configs/error-state-matcher';
import { IMovimiento, IPlataformaMovimiento, IreportRequest, IreportResponse } from '@sicatel/shared/models/report/report-move';
import { EPlataformType } from '@sicatel/shared/enums/plataform-type.enum'
import * as ReportMoveActions from '@sicatel/modules/reports/report-move/store/actions/report-move.actios';
import * as fromReportMove from '@sicatel/modules/reports/report-move/store/reducers/report-move.reducer';
import { IToken } from '@sicatel/shared/models/user/user';
import { environment } from '@sicatel/env/environment';
import { ReportMoveService } from '@sicatel/core/http/report/report-move/reportmove.service';
import { SicatelCommons } from '@sicatel/configs/commons.constants';


@Component({
  selector: 'sicatel-report-move',
  templateUrl: './report-move.component.html',
  styleUrls: ['./report-move.component.scss']
})
export class ReportMoveComponent implements OnInit {

  @Input() token: IToken = {} as IToken;
  @Output() signOffEvent = new EventEmitter();

  store$!: Observable<IreportResponse>;

  constructor(private _dialog: MatDialog, private store: Store<fromReportMove.State>, private route: Router,
    private reportMoveService: ReportMoveService) {
  }

  loading?: boolean = false;
  matcher: TelcelErrorStateMatcher = new TelcelErrorStateMatcher();

  showTableDetail = false;
  showTableDetailBes = false;
  showTableDetailMobile = false;
  showTableDetailMig = false;
  ePlataformaType = EPlataformType;
  typesPlataforma: Array<EPlataformType> = [this.ePlataformaType.TODAS, this.ePlataformaType.MOBILE, this.ePlataformaType.BES];
  plataform: string = this.ePlataformaType.TODAS;
  storeSubscribe: Subscription = new Subscription();
  searchReportForm = new FormGroup({
    dateInit: new FormControl(new Date(), Validators.required),
    dateEnd: new FormControl(new Date(), Validators.required),
    type: new FormControl(this.plataform, Validators.required)
  });

  displayedColumns: string[] = ['sec', 'folio', 'fecha-Hora', 'id-centro', 'id-region', 'folio-sicatel', 'plataforma', 'detalle'];
  dataSourceMig = new MatTableDataSource<IMovimiento>();
  dataSourceBes = new MatTableDataSource<IMovimiento>();
  dataSourceMobile = new MatTableDataSource<IMovimiento>();
  dataSource = new MatTableDataSource<IMovimiento>();

  selection = new SelectionModel<any>(true, []);
  minDate = new Date();
  maxDate = new Date();
  dateInitValue?: string = 'MM/DD/YYYY'
  dateEndValue?: string = 'MM/DD/YYYY'
  ELEMENT_DATA: IPlataformaMovimiento[] = [];
  plataformaBes: IMovimiento[] = [];
  plataformaMobile: IMovimiento[] = [];
  plataformaMig: IMovimiento[] = [];
  sinPlataforma: IMovimiento[] = [];
  daySubtration = 30;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  /**
  * Close sesión user
  *
  * @summary Make event close session
  * @returns void
  */
  onClickSignOff(): void {
    this.signOffEvent.emit();
  }
  /**
  * Init window
  *
  * @summary Make event gnOnInit 
  * @returns void
  */
  ngOnInit(): void {
    //const ConvertedDate = this.myDatepipe.transform(this.searchReportForm.controls.dateEnd.value, 'yyyy-MM-dd');
    this.minDate = this.calculateMonthBefore();


    if (!environment.production) {
      console.log("fecha value :  ", this.searchReportForm.controls.dateEnd.value);
      console.log("USER : ", this.token.user.permisos);
      console.log("accessToken : ", this.token.accessToken);
    }
    //TODO permisos de pantalla
    if (!this.token.user.permisos.includes('109')) {
      // no se tienen permisos
      this.route.navigate([SicatelCommons.pathDashboard]);
      console.log("Sin permiso");

    }

  }

  /**
 * init paginator
 *
 * @summary Make event after init
 * @returns void
 */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSourceMig.paginator = this.paginator;
    this.dataSourceBes.paginator = this.paginator;
    this.dataSourceMobile.paginator = this.paginator;
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
  * Summit Request 
  *
  * @summary: get results for filter selected into the application
  * @returns void
  */
  onSubmit(): void {

    if (this.searchReportForm.valid) {

      const reportRequest = {
        userName: this.token.user.idUsuario,
        dateEnd: this.getDateEnd(),
        dateInit: this.getDateInit(),
        plataformSelect: this.plataform
      } as IreportRequest;

      Swal.fire({
        title: '',
        text: 'Cargando...',
        icon: 'info',
        footer: '',
        timer: 2000,
        didOpen: () => {
          Swal.showLoading();
          this.plataformaBes = [];
          this.plataformaMobile = [];
          this.plataformaMig = [];
          this.sinPlataforma = [];

          this.dataSourceBes = new MatTableDataSource<IMovimiento>(this.plataformaBes);
          this.dataSourceMobile = new MatTableDataSource<IMovimiento>(this.plataformaMobile);
          this.dataSourceMig = new MatTableDataSource<IMovimiento>(this.plataformaMig);
          this.dataSource = new MatTableDataSource<IMovimiento>(this.sinPlataforma);

          this.showTableDetailBes = false;
          this.showTableDetailMobile = false;
          this.showTableDetailMig = false;
          this.showTableDetail = false;

          this.store.dispatch(ReportMoveActions.loadData({ reportRequest }));

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

              //recorer Json buscando las plataformas 
              var clave = "nombrePlataforma";
              console.log("DATOS pos 0 ->", this.ELEMENT_DATA[0]);
              console.log("DATOS length ->", this.ELEMENT_DATA.length);

              this.ELEMENT_DATA.map((movimiento) => {
                if (movimiento.nombrePlataforma == "BES") {
                  //Bes
                  this.plataformaBes = movimiento.movimientos;
                  this.showTableDetailBes = true;
                  this.dataSourceBes = new MatTableDataSource<IMovimiento>(this.plataformaBes);
                } else if (movimiento.nombrePlataforma == "MOBILE") {
                  //mobile
                  this.plataformaMobile = movimiento.movimientos;
                  this.showTableDetailMobile = true;
                  this.dataSourceMobile = new MatTableDataSource<IMovimiento>(this.plataformaMobile);
                } else if (movimiento.nombrePlataforma == "Por Definir") {
                  //Mig Lineas en proceso de Migracion
                  this.plataformaMig = movimiento.movimientos;
                  this.showTableDetailMig = true;
                  this.dataSourceMig = new MatTableDataSource<IMovimiento>(this.plataformaMig);
                } else {
                  //sin platafroma
                  this.sinPlataforma = movimiento.movimientos;
                  this.showTableDetail = true;
                  this.dataSource = new MatTableDataSource<IMovimiento>(this.sinPlataforma);
                }
              });
            }
        }
      });

    }
  }

  /**
   * Control open modal details
   *
   * @summary Make open modal deatils
   * @returns void
   */
  openModalShowDetail(data: any): void {

    let dataObject: any = { 'data': ([data]) };
    console.log("DATA :", data);
    const dialogRef = this._dialog.open(ModalDetailMoveComponent, {
      panelClass: 'custom-dialog-container-user',
      width: ('97%'),
      data: dataObject,
      maxWidth: ('100% !important'),
      disableClose: true
    });
  }

  /**
   * Control days -30
   *
   * @summary Make event days -30
   * @returns void
   */
  calculateMonthBefore(): Date {
    var f = new Date();
    f.setDate(f.getDate() - this.daySubtration);
    return f;
  }



  /**
    * Get date for control dateInit
    *
    * @summary Make event 
    * @returns void
    */
  getDateInit(): string {
    const body = this.searchReportForm.value;
    const date = body.dateInit?.toLocaleString("sv-SE");
    if (date) {
      return this.returnDate(date)
    } else {
      return ''
    }
  }

  /**
  * Get date for control dateInit
  *
  * @summary Make event 
  * @returns void
  */
  getDateEnd(): string {
    const body = this.searchReportForm.value;
    const date = body.dateEnd?.toLocaleString("sv-SE");
    if (date) {
      return this.returnDate(date)
    } else {
      return ''
    }
  }

  /**
  * Get date 
  *
  * @summary Make date  
  * @returns void
  */
  returnDate(date: string): string {
    return date.split(' ')[0];
  }



}

