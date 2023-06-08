import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportMoveContainer } from '@sicatel/modules/reports/report-move/containers/report-move.container';
import { ReportMoveComponent } from './components/report-move.component';

const routes: Routes = [{
  path: '',
  component: ReportMoveComponent,
  pathMatch: 'full'
}];
// component: ReportMoveContainer,
@NgModule({
  imports: [
      RouterModule.forChild(routes)
  ],
  exports: [
      RouterModule
  ]
})

export class ReportMoveRoutingModule { }
