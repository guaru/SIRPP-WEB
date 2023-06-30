import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportMoveComponent } from '@sicatel/modules/reports/report-move/components/report-move.component';
import { ReportMoveContainer } from '@sicatel/modules/reports/report-move/containers/report-move.container';
import { ReportMoveRoutingModule } from '@sicatel/modules/reports/report-move/report-move-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { DirectivesModule } from '@sicatel/shared/directives/directives.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ModalDetailMoveComponent } from '@sicatel/modules/reports/report-move/components/modals/modal-detail-move.component';
import { MatDialogModule } from '@angular/material/dialog';

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
    MatDialogModule
  ]
})
export class ReportMoveModule { }
