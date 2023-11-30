import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SicatelUrlsConstants } from '@sicatel/configs/urls.constants';
import { ConsultaOrdenContainer } from '@sicatel/modules/consulta-orden/containers/consulta-orden.container';

const routes:  Routes = [
  {
     path: '',
     component: ConsultaOrdenContainer,
     pathMatch: 'full'
  },
  {
    path: '*',
    redirectTo: SicatelUrlsConstants.pathConsultaOrden,
    pathMatch: 'full'

  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ConsultaOrdenRoutingModule { }
