import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SicatelUrlsConstants } from '@sicatel/configs/urls.constants';
import { IUserRequest } from '@sicatel/shared/models/request/user.interface';

import { Observable, map } from 'rxjs';
import { IreportMoveDetail } from '@sicatel/shared/models/report/report-move';

@Injectable({
  providedIn: 'root'
})
export class ReportmoveService {

  constructor(private http: HttpClient) { }

  /**
   * Authenticate user, generate token
   *
   * @summary Make a call ms authenticate
   * @returns
   */
  loadData(userRequest: IUserRequest): Observable<Array<IreportMoveDetail>>{
    //return this.http.post<IUserResponse>(`${SicatelUrlsConstants.signInUrl}`,userRequest); Array<IreportMoveDetail>
    //return this.http.get<Array<ISlider>>(SicatelUrlsConstants.dataSliderUrl).pipe(map(data => data as Array<ISlider>));
    return this.http.get<Array<IreportMoveDetail>>(`${SicatelUrlsConstants.signInUrl}`).pipe(map(data => data as unknown as Array<IreportMoveDetail>));
  }


}
