import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { SicatelUrlsConstants } from '@sicatel/configs/urls.constants';
import { ConsultaSaldoContainer } from '@sicatel/modules/consulta-saldo/containers/consulta-saldo.container';


const routes: Routes = [{
  path: '',
  component: ConsultaSaldoContainer,
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: SicatelUrlsConstants.pathConsultaSaldo,
  pathMatch: 'full'
}
];


@NgModule({
  imports: [
      RouterModule.forChild(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class ConsultaSaldoRoutingModule { }
