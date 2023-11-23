import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ConsultaSaldoModalComponent } from '@sicatel/modules/consulta-saldo/components/consulta-saldo-modal.component';
import { ConsultaSaldoComponent } from '@sicatel/modules/consulta-saldo/components/consulta-saldo.component';
import { ConsultaSaldoRoutingModule } from '@sicatel/modules/consulta-saldo/consulta-saldo-routing.module';
import { ConsultaSaldoContainer } from '@sicatel/modules/consulta-saldo/containers/consulta-saldo.container';
import { fromConsultaSaldo } from '@sicatel/modules/consulta-saldo/store';
import { ConsultaSaldoEffects } from '@sicatel/modules/consulta-saldo/store/effects/consulta-saldo.effects';
import { SicatelMaskModule } from '@sicatel/modules/mask/mask.module';
import { DirectivesModule } from '@sicatel/shared/directives/directives.module';


@NgModule({
  declarations: [
    ConsultaSaldoComponent,
    ConsultaSaldoContainer,
    ConsultaSaldoModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ConsultaSaldoRoutingModule,
    MatDialogModule,
    MatInputModule,
    DirectivesModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    SicatelMaskModule,
    EffectsModule.forFeature([ConsultaSaldoEffects]),
    StoreModule.forFeature(fromConsultaSaldo.featureKey, fromConsultaSaldo.consultaSaldoReducer)
  ]
})
export class ConsultaSaldoModule { }
