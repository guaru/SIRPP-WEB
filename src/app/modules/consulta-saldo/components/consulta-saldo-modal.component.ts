import { Component, HostListener, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SicatelMessages } from '@sicatel/configs/messsages.constant';
import { UtilsService } from '@sicatel/core/services/utils/utils.service';
import { IConsultaSaldoRequest } from '@sicatel/shared/models/consulta-saldo/consulta-saldo-request.interface';


@Component({
  selector: 'sicatel-consulta-saldo-modal',
  templateUrl: './consulta-saldo-modal.component.html'
})
export class ConsultaSaldoModalComponent {

  consultaForm = new FormGroup({
    cuenta: new FormControl('', [Validators.minLength(10)]),
    telefono: new FormControl('', [Validators.minLength(10)])
  });

  constructor(public dialogRef: MatDialogRef<ConsultaSaldoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IConsultaSaldoRequest, private utilService: UtilsService) {
    if (data) {
      this.consultaForm.controls.cuenta.setValue(data.cuenta);
      this.consultaForm.controls.telefono.setValue(data.telefono);
    }

  }

  /**
   * Submit consulta saldo
   *
   * @summary Start consulta saldo from modal
   * @returns
   */
  @HostListener('window:keydown.f8', ['$event'])
  onHostSubmit(event: KeyboardEvent): void {
    event.preventDefault();
    this.submit();
  }


  onSubmit(event: Event): void {
    event.preventDefault();
    this.submit();
  }


  private submit() {
    if (this.consultaForm.valid) {
      this.data.cuenta = this.consultaForm.controls.cuenta!.value || '';
      this.data.telefono = this.consultaForm.controls.telefono!.value || '';
      if(this.utilService.isEmpty(this.data.cuenta) && this.utilService.isEmpty(this.data.telefono))
      {
        this.utilService.showErrorMessage(SicatelMessages.errorEmptyAccountOrPhone);
        return;
      }
      this.dialogRef.close(this.data);
    }
  }

}
