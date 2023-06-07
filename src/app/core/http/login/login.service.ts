import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SicatelUrlsConstants } from '@sicatel/configs/urls.constants';
import { Menu } from '@sicatel/shared/models/menu/menu.interface';
import { IUserRequest } from '@sicatel/shared/models/request/user.interface';
import { IUserResponse } from '@sicatel/shared/models/response/user.response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  /**
   * Authenticate user, generate token
   *
   * @summary Make a call ms authenticate
   * @returns
   */
  signIn(userRequest: IUserRequest): Observable<IUserResponse> {
    return this.http.post<IUserResponse>(`${SicatelUrlsConstants.signInUrl}`,userRequest);
  }

  /**
   * Load menu user
   * 
   * @summary Load menu for user authenticate
   * @returns Array<Menu>
   */
  loadMenu(): Observable<Array<Menu>> {
    return  this.http.get<Array<Menu>>(`${SicatelUrlsConstants.loadMenuUrl}`);
  }

  

}
