import { Component, ElementRef, HostListener, Inject, OnDestroy, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { SicatelMessages } from '@sicatel/configs/messsages.constant';
import { UtilsService } from '@sicatel/core/services/utils/utils.service';
import { ConsultaOrdenActions, ConsultaOrdenSelectors, fromConsultaOrden } from '@sicatel/modules/consulta-orden/store';
import { IConsultaOrdenRequest } from '@sicatel/shared/models/consulta-orden/consulta-orden-request.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'sicatel-consulta-orden',
  templateUrl: './consulta-orden.component.html'
})
export class ConsultaOrdenComponent implements OnDestroy {

  @ViewChild('inputOrden') inputOrden!: ElementRef;

  searchForm = new FormGroup({
    orden: new FormControl('', [Validators.maxLength(50), Validators.required]),
    detail: new FormControl(true)
  });
  regionId!: number;
  state$!: Observable<{ state: fromConsultaOrden.State }>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IConsultaOrdenRequest,
    public dialogRef: MatDialogRef<ConsultaOrdenComponent>,
    private store: Store<fromConsultaOrden.State>,
    private utilService: UtilsService) {
    if (data) {
      this.regionId = data.regionId;
    }
    this.state$ = this.store.select(ConsultaOrdenSelectors.selectConsultaOrden);
  }

  @HostListener('window:keydown.f8', ['$event'])
  onHostSubmit(event: KeyboardEvent): void {
    event.preventDefault();
    this.onSubmit();
  }

  @HostListener('window:keydown.f9', ['$event'])
  onHostPayment(event: KeyboardEvent): void {
    event.preventDefault();
    this.utilService.showErrorMessage(SicatelMessages.errorNotImplement);
  }

  ngOnDestroy(): void {
    this.store.dispatch(ConsultaOrdenActions.consultaOrdenReset());
  }

  onSubmit() {
    if (this.regionId && this.searchForm.valid) {
      this.store.dispatch(ConsultaOrdenActions.consultaOrden({ request: this.getRequest() }));
    } else {
      this.inputOrden.nativeElement.focus();
    }
  }

  getRequest(): IConsultaOrdenRequest {
    return {
      orderId: this.searchForm.controls.orden.value,
      regionId: this.regionId
    } as IConsultaOrdenRequest;
  }

}
