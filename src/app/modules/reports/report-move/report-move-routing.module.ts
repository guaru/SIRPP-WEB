import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportMoveContainer } from '@sicatel/modules/reports/report-move/containers/report-move.container';
import { ReportMoveComponent } from '@sicatel/modules/reports/report-move/components/report-move.component';

const routes: Routes = [{
  path: '',
  component: ReportMoveContainer,
  pathMatch: 'full'
}];
// component: ReportMoveContainer,
//component: ReportMoveComponent,
@NgModule({
  imports: [
      RouterModule.forChild(routes)
  ],
  exports: [
      RouterModule
  ]
})

export class ReportMoveRoutingModule { }
