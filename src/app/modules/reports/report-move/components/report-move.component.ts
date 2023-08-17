import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { TelcelErrorStateMatcher } from '@sicatel/configs/error-state-matcher';
import { ReportMoveService } from '@sicatel/core/http/report/report-move/reportmove.service';
import * as AuthenticationSelectors from '@sicatel/modules/authentication/store/selectors/authentication.selectors';
import * as fromReportMove from '@sicatel/modules/reports/report-move/store/reducers/report-move.reducer';
import { ModalDetailMoveComponent } from '@sicatel/shared/dialogs/report-move/modal-detail-move.component';
import { EPlataformType } from '@sicatel/shared/enums/plataform-type.enum';
import { IDataReportMove, IMovimiento, IPlataformaMovimiento, IreportRequest } from '@sicatel/shared/models/report/report-move';
import { IToken } from '@sicatel/shared/models/user/user';
import Utils from '@sicatel/shared/utils/utils';
import { Observable, Subscription } from 'rxjs';
import Swal from 'sweetalert2';
@Component({
  selector: 'sicatel-report-move',
  templateUrl: './report-move.component.html',
  styleUrls: ['./report-move.component.scss']
})

@ViewChild(MatPaginator)

export class ReportMoveComponent implements OnInit, AfterViewInit {
  @Output()
  addAttende = new EventEmitter<IreportRequest>();
  user!: IToken;
  user$!: Observable<IToken>;
  store$!: Observable<{ state: fromReportMove.State}>;
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

  displayedColumns: Array<string> = ['sec', 'folio', 'fecha-Hora', 'id-centro', 'id-region', 'folio-sicatel', 'plataforma', 'detalle'];
  dataSourceMig = new MatTableDataSource<IMovimiento>();
  dataSourceBes = new MatTableDataSource<IMovimiento>();
  dataSourceMobile = new MatTableDataSource<IMovimiento>();
  dataSource = new MatTableDataSource<IMovimiento>();


  minDate = new Date();
  maxDate = new Date();
  dateInitValue?: string = 'MM/DD/YYYY';
  dateEndValue?: string = 'MM/DD/YYYY';
  elementData!: Array<IPlataformaMovimiento> ;
  plataformaBes!: Array<IMovimiento>;
  plataformaMobile!: Array<IMovimiento> ;
  plataformaMig!: Array<IMovimiento>;
  sinPlataforma!: Array<IMovimiento>;
  daySubtration = 90;
  paginator!: MatPaginator;
  authenticationSelectors: any;

  constructor(private dialog: MatDialog, private store: Store<fromReportMove.State>,
    private reportMoveService: ReportMoveService) {
  }

  /*** Init window
  *
  * @summary Make event gnOnInit
  * @returns void
  */
  ngOnInit(): void {
    this.minDate = Utils.calculateMonthBefore(this.daySubtration);
    this.user$= this.store.select(AuthenticationSelectors.selectAuthenticationToken);
    const userSubscription = this.user$.subscribe(users => {
      this.user = users;
    });

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

  /*** Summit Request
  *
  * @summary: get results for filter selected into the application
  * @returns void
  */
  onSubmit(): void {
      const reportRequest = {
        userName: this.user.user.idUsuario,
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
          this.reportMoveService.loadDataReport(reportRequest).subscribe(data => {this.elementData = data.plataformaMovimientos;});

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

          this.addAttende.emit(reportRequest);


        },didClose: () => {

          if (this.elementData.length === 0) {
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

            this.elementData.map((movimiento) => {
              if (movimiento.nombrePlataforma === 'BES') {
                //Bes
                this.plataformaBes = movimiento.movimientos;
                this.showTableDetailBes = true;
                this.dataSourceBes = new MatTableDataSource<IMovimiento>(this.plataformaBes);
              } else if (movimiento.nombrePlataforma === 'MOBILE') {
                //mobile
                this.plataformaMobile = movimiento.movimientos;
                this.showTableDetailMobile = true;
                this.dataSourceMobile = new MatTableDataSource<IMovimiento>(this.plataformaMobile);
              } else if (movimiento.nombrePlataforma === 'Por Definir') {
                //Mig Lineas en proceso de Migracion
                this.plataformaMig = movimiento.movimientos;
                this.showTableDetailMig = true;
                this.dataSourceMig = new MatTableDataSource<IMovimiento>(this.plataformaMig);
              } else {
                //any plataform
                this.sinPlataforma = movimiento.movimientos;
                this.showTableDetail = true;
                this.dataSource = new MatTableDataSource<IMovimiento>(this.sinPlataforma);
              }
            });
          }
        }
      });
  }

  /**
   * Control open modal details
   *
   * @summary Make open modal deatils
   * @returns void
   */
  openModalShowDetail(data: IMovimiento): void {

    const dataObject = { data:  ([data]) } as IDataReportMove;
    const dialogRef = this.dialog.open(ModalDetailMoveComponent, {
      panelClass: 'custom-dialog-container-user',
      width: ('97%'),
      data: dataObject,
      maxWidth: ('100% !important'),
      disableClose: true
    });
  }


  /**
   * Get date for control dateInit
   *
   * @summary Make event
   * @returns void
   */
  getDateInit(): string {
    const body = this.searchReportForm.value;
    return this.splitDate(body.dateInit!);
  }

  /**
   * Get date for control dateInit
   *
   * @summary Make event
   * @param TODO
   * @returns void
   */
  getDateEnd(): string {
    const body = this.searchReportForm.value;
    return this.splitDate(body.dateEnd!);
  }

  /**
   * Get date
   *
   * @summary Make date
   * @returns void
   */
  splitDate(date: Date): string {
    const stringDate = date.toLocaleString('sv-SE').split(' ')[0];
    return stringDate;
  }

  /*** init paginator
   *
   * @summary Make event after init
   * @returns void
   */
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
