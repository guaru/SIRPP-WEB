
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AperturaCajaRoutingModule } from '@sicatel/modules/apertura-caja/apertura-caja-routing.module';
import { AperturaCajaComponent } from '@sicatel/modules/apertura-caja/apertura-caja.component';


@NgModule({
  declarations: [
    AperturaCajaComponent
  ],
  imports: [
    CommonModule,
    AperturaCajaRoutingModule
  ]
})
export class AperturaCajaModule { }
