import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SicatelUrlsConstants } from '@sicatel/configs/urls.constants';
import { IConsultaOrdenRequest } from '@sicatel/shared/models/consulta-orden/consulta-orden-request.interface';
import { IOrdenDetailResponse } from '@sicatel/shared/models/consulta-orden/orden-detail-response.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConsultaOrdenService {
    constructor(private http: HttpClient) { }

    consultaOrden(request: IConsultaOrdenRequest): Observable<IOrdenDetailResponse> {
        return this.http.post<IOrdenDetailResponse>(`${SicatelUrlsConstants.consultaOrdenInfoUrl}`, request);
    }

}
