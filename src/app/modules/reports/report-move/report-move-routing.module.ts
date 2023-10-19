import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportMoveContainer } from '@sicatel/modules/reports/report-move/containers/report-move.container';

const routes: Routes = [{
  path: '',
  component: ReportMoveContainer,
  pathMatch: 'full'
}];

@NgModule({
  imports: [
      RouterModule.forChild(routes)
  ],
  exports: [
      RouterModule
  ]
})

export class ReportMoveRoutingModule { }
