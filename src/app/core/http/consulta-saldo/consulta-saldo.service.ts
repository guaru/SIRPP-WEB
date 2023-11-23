import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SicatelUrlsConstants } from '@sicatel/configs/urls.constants';
import { IConsultaSaldoRequest } from '@sicatel/shared/models/consulta-saldo/consulta-saldo-request.interface';
import { ISaldo } from '@sicatel/shared/models/consulta-saldo/saldo.interface';
import { ISaldos } from '@sicatel/shared/models/consulta-saldo/saldos.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaSaldoService {

  constructor(private http: HttpClient) { }

  /**
   * Consume api consulta saldo por cuenta o telefono
   *
   * @summary Search saldo for account or phone
   * @param IConsultaSaldoRequest
   * @returns Observable<Saldos>
   */
  consultaSaldo(request: IConsultaSaldoRequest): Observable<ISaldos> {
    return this.http.post<ISaldos>(SicatelUrlsConstants.consultaSaldoUrl, request);
  }

  /**
   * Consume api consulta Saldo complemento
   *
   * @summary Consulta saldo complemento
   * @param IConsultaSaldoRequest
   * @returns Observable<Saldo>
   */
  consultaComplemento(request: IConsultaSaldoRequest): Observable<ISaldo> {
    return this.http.post<ISaldo>(SicatelUrlsConstants.consultaSaldoComplementoUrl, request);
  }

}
