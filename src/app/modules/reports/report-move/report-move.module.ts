import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import ReportMoveComponent from '@sicatel/modules/reports/report-move/components/report-move.component';
import { ReportMoveContainer } from '@sicatel/modules/reports/report-move/containers/report-move.container';
import { ReportMoveRoutingModule } from '@sicatel/modules/reports/report-move/report-move-routing.module';
import { ModalDetailMoveComponent } from '@sicatel/shared/dialogs/report-move/modal-detail-move.component';
import { DirectivesModule } from '@sicatel/shared/directives/directives.module';

/*
@Injectable()
export class CustomMatPaginatorIntl extends MatPaginatorIntl {

  ofLabel = 'of';
  override itemsPerPageLabel = 'a';
  override nextPageLabel = 'b';
  override previousPageLabel = 'c';

  constructor() {
    super();
    this.getAndInitTranslations();
  }


  getAndInitTranslations() {
    this.itemsPerPageLabel = 'a';
    this.nextPageLabel = 'b';
    this.previousPageLabel = 'c';
    this.ofLabel = 'd';
    this.changes.next();
  }

  override getRangeLabel = (
    page: number,
    pageSize: number,
    length: number
  ) => {
    if (length === 0 || pageSize === 0) {
      return `0 ${this.ofLabel} ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} ${
      this.ofLabel
    } ${length}`;
  };
}
*/

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function getSpanishPaginatorIntl() {
  const paginatorIntl = new MatPaginatorIntl();
  paginatorIntl.itemsPerPageLabel = 'Elementos por pagina :';
  paginatorIntl.nextPageLabel = 'Siguiente pagina';
  paginatorIntl.previousPageLabel = 'Pagina anterior';
  paginatorIntl.getRangeLabel = dutchRangeLabel;
  return paginatorIntl;
}

const dutchRangeLabel = (page: number, pageSize: number, length: number) => {

  if (length === 0 || pageSize === 0) { return `0 de  ${length}`; }
  length = Math.max(length, 0);
  const startIndex = page * pageSize;
  // If the start index exceeds the list length, do not try and fix the end index to the end.
  const endIndex = startIndex < length ?
    Math.min(startIndex + pageSize, length) :
    startIndex + pageSize;
  return `${startIndex + 1} - ${endIndex} de ${length}`;
};

@NgModule({
  declarations: [
    ReportMoveContainer,
    ReportMoveComponent,
    ModalDetailMoveComponent
  ],
  imports: [
    CommonModule,
    ReportMoveRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    DirectivesModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    DatePipe
  ], providers:[
   //{  provide: MatPaginatorIntl, useValue: CustomMatPaginatorIntl }
   //{ provide: MatPaginatorIntl, useValue: getSpanishPaginatorIntl() }
  ]
})
export class ReportMoveModule {  }
