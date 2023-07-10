import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SicatelUrlsConstants } from '@sicatel/configs/urls.constants';
import { IreportResponse } from '@sicatel/shared/models/report/report-move';
import { IreportRequest } from '@sicatel/shared/models/report/report-move';

@Injectable({
  providedIn: 'root'
})
export class ReportMoveService {

  constructor(private http: HttpClient) { }

  /**
   * generate Report move from service
   *
   * @summary Make a call ms report
   * @returns
   */
  loadDataReport(reportRequest: IreportRequest,token: String): Observable<IreportResponse>{
    console.log("loadDataReport ", reportRequest, `${SicatelUrlsConstants.dataGetReportMove}`);
    let headers = new HttpHeaders().set('Authorization','Bearer '+token.trim)
    return this.http.post<IreportResponse>(`${SicatelUrlsConstants.dataGetReportMove}`,reportRequest ,
    { headers: headers});
  }



}
