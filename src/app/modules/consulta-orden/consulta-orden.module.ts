import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ConsultaOrdenComponent } from '@sicatel/modules/consulta-orden/components/consulta-orden.component';
import { ConsultaOrdenRoutingModule } from '@sicatel/modules/consulta-orden/consulta-orden-routing.module';
import { ConsultaOrdenContainer } from '@sicatel/modules/consulta-orden/containers/consulta-orden.container';
import { DirectivesModule } from '@sicatel/shared/directives/directives.module';

import { fromConsultaOrden } from './store';
import { ConsultaOrdenEffects } from './store/effects/consulta-orden.effects';
import { SicatelMaskModule } from '../mask/mask.module';


@NgModule({
  declarations: [
    ConsultaOrdenContainer,
    ConsultaOrdenComponent
  ],
  imports: [
    CommonModule,
    ConsultaOrdenRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    DirectivesModule,
    SicatelMaskModule,
    EffectsModule.forFeature([ConsultaOrdenEffects]),
    StoreModule.forFeature(fromConsultaOrden.featureKey, fromConsultaOrden.consultaOrdenReducer)
  ],
  exports: [
     ConsultaOrdenContainer
  ]
})
export class ConsultaOrdenModule { }
