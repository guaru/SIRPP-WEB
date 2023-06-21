import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AperturaCajaComponent } from '@sicatel/modules/apertura-caja/apertura-caja.component';


const routes: Routes = [
  {
    path: '',
    component: AperturaCajaComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'apertura-de-caja',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AperturaCajaRoutingModule { }
