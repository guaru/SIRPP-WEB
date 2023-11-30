import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ConsultaOrdenComponent } from '@sicatel/modules/consulta-orden/components/consulta-orden.component';
import { ConsultaOrdenRoutingModule } from '@sicatel/modules/consulta-orden/consulta-orden-routing.module';
import { ConsultaOrdenContainer } from '@sicatel/modules/consulta-orden/containers/consulta-orden.container';
import { DirectivesModule } from '@sicatel/shared/directives/directives.module';


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
    DirectivesModule
  ],
  exports: [
     ConsultaOrdenContainer
  ]
})
export class ConsultaOrdenModule { }
