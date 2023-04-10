import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SicatelUrlsConstants } from '@sicatel/configs/urls.constants';
import { IUserRequest } from '@sicatel/shared/models/request/user.interface';
import { IUserResponse } from '@sicatel/shared/models/response/User.response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  signIn(userRequest: IUserRequest): Observable<IUserResponse>{
    return this.http.post<IUserResponse>(`${SicatelUrlsConstants.signInUrl}`,userRequest);
  }


}
