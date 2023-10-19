import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SicatelUrlsConstants } from '@sicatel/configs/urls.constants';
import { IReportResponse } from '@sicatel/shared/models/report/report-move';
import { IReportRequest } from '@sicatel/shared/models/report/report-move';
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
   * @param reportRequest: IReportRequest
   * @returns Observable<IReportResponse>
   */
  loadDataReport(reportRequest: IReportRequest): Observable<IReportResponse>{
    return this.http.post<IReportResponse>(`${SicatelUrlsConstants.dataGetReportMove}`,reportRequest );
  }
}
