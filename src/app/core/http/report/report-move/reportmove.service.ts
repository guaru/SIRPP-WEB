import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SicatelUrlsConstants } from '@sicatel/configs/urls.constants';
import { IreportResponse } from '@sicatel/shared/models/report/report-move';
import { IreportRequest } from '@sicatel/shared/models/report/report-move';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportMoveService {

  constructor(private http: HttpClient) { }

  /**
   * get Report move from service
   *
   * @summary Make a call service for report
   * @param reportRequest: IreportRequest
   * @returns Observable<IreportResponse>
   */
  loadDataReport(reportRequest: IreportRequest): Observable<IreportResponse>{
    return this.http.post<IreportResponse>(`${SicatelUrlsConstants.dataGetReportMove}`,reportRequest );
  }
}
