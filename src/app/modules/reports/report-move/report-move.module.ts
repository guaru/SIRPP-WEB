import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { ReportMoveComponent } from '@sicatel/modules/reports/report-move/components/report-move.component';
import { ReportMoveContainer } from '@sicatel/modules/reports/report-move/containers/report-move.container';
import { ReportMoveRoutingModule } from '@sicatel/modules/reports/report-move/report-move-routing.module';
import { ModalDetailMoveComponent } from '@sicatel/shared/dialogs/report-move/modal-detail-move.component';
import { DirectivesModule } from '@sicatel/shared/directives/directives.module';

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
  ]
})
export class ReportMoveModule { }
