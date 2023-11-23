import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { SicatelCommons } from '@sicatel/configs/commons.constants';
import { SicatelMessages } from '@sicatel/configs/messsages.constant';
import { UtilsService } from '@sicatel/core/services/utils/utils.service';
import { TypeCsComplemento } from '@sicatel/shared/enums/type-cs-complement';
import { IConsultaSaldoRequest } from '@sicatel/shared/models/consulta-saldo/consulta-saldo-request.interface';
import { ISaldo } from '@sicatel/shared/models/consulta-saldo/saldo.interface';
import { Option } from '@sicatel/shared/models/option.interface';


@Component({
  selector: 'sicatel-consulta-saldo',
  templateUrl: './consulta-saldo.component.html',
  styleUrls: ['./consulta-saldo.component.scss']
})
export class ConsultaSaldoComponent {

  @Input() saldo!: ISaldo;
  @Input() cuenta = '';
  @Input() telefono = '';
  @Input() enabledCs = true;
  @Input() enabledPay = false;
  @Input() enabledRegion = true;
  @Output() consultaEvent = new EventEmitter<IConsultaSaldoRequest>();
  @Output() resetEvent = new EventEmitter();
  @Output() consultaComplementoEvent = new EventEmitter<IConsultaSaldoRequest>();
  regiones: Array<Option> = SicatelCommons.regiones;
  panelOpenState = false;

  constructor(private utilService: UtilsService) { }

  /**
   * Consulta saldo
   *
   * @summary Execute search phone or account
   * @returns
   */
  @HostListener('window:keydown.f8', ['$event'])
  onConsulta(event: Event): void {
    event.preventDefault();
    this.executeSearch();
  }

  /**
   * Consulta facturacion
   *
   * @summary Consulta datos facturacion
   * @param event
   */
  @HostListener('window:keydown.f2', ['$event'])
  onFacturacion(event: Event): void {
    event.preventDefault();
    if (this.saldo.plataforma === SicatelCommons.bes && this.enabledPay) {
      const request = this.getRequest();
      request.typeCs = TypeCsComplemento.FACTURACION;
      this.consultaComplementoEvent.emit(request);
    }
  }

  /**
   * Consulta datos telecomunicaciones y servicios
   *
   * @summary Consulta datos cobranza
   * @param event
   */
  @HostListener('window:keydown.f1', ['$event'])
  onTelecomServ(event: Event): void {
    event.preventDefault();
    if (this.saldo.plataforma === SicatelCommons.bes && this.enabledPay) {
      const request = this.getRequest();
      request.typeCs = TypeCsComplemento.TELECOM_SERV;
      this.consultaComplementoEvent.emit(request);
    }
  }

  /**
   * Consulta datos conbranza
   *
   * @summary Consulta datos cobranza
   * @param event
   */
  @HostListener('window:keydown.f3', ['$event'])
  onCobranza(event: Event): void {
    event.preventDefault();
    if (this.saldo.plataforma === SicatelCommons.bes && this.enabledPay) {
      const request = this.getRequest();
      request.typeCs = TypeCsComplemento.COBRANZA;
      this.consultaComplementoEvent.emit(request);
    }
  }

  /**
   * Saldo a pagar
   *
   * @summary Envia saldo a pagar a ventana de registro de pagos
   * @returns
   */
  @HostListener('window:keydown.f9', ['$event'])
  onSaldoPagar(event: Event): void {
    event.preventDefault();
    if (this.enabledPay) {
      this.utilService.showErrorMessage(SicatelMessages.errorNotImplement);
    }
  }

  /**
   * Saldo Telecomunicaciones
   *
   * @summary Envia saldo telecomunicaciones a ventana de registro de pagos
   * @param event
   */
  @HostListener('window:keydown.f12', ['$event'])
  onSaldoTelecomunicaciones(event: Event): void {
    event.preventDefault();
    if (this.enabledPay) {
      this.utilService.showErrorMessage(SicatelMessages.errorNotImplement);
    }
  }

  /**
   * Saldo estimado a pagar
   *
   * @summary Envia saldo estimado a pagar a ventana registro de pagos
   * @param event
   */
  @HostListener('window:keydown.f5', ['$event'])
  onSaldoEstimadoAPagar(event: Event): void {
    event.preventDefault();
    if (this.enabledPay) {
      this.utilService.showErrorMessage(SicatelMessages.errorNotImplement);
    }
  }

  /**
   * Salir consulta saldo
   *
   * @summary Salir de consulta de saldo y reset data
   * @param event
   */
  @HostListener('window:keydown.esc', ['$event'])
  onSalir(event: Event): void {
    event.preventDefault();
    this.resetEvent.emit();
  }


  /**
   * Consulta saldo
   *
   * @summary Execute search when change region
   */
  onConsultaChange(): void {
    this.executeSearch();
  }

  private executeSearch(): void {
    if (this.enabledCs) {
      const request = this.getRequest();
      this.consultaEvent.emit(request);
    }
  }

  private getRequest(): IConsultaSaldoRequest {
    return {
      cuenta: this.cuenta,
      telefono: this.telefono,
      region: this.saldo.region || 0
    } as IConsultaSaldoRequest;
  }
}
