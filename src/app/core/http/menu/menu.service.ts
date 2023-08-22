import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SicatelUrlsConstants } from '@sicatel/configs/urls.constants';
import { Menu } from '@sicatel/shared/models/menu/menu.interface';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    constructor(private http: HttpClient) { }

    /**
     * Load menu user
     *
     * @summary Load menu for user authenticate
     * @returns Observable<Array<Menu>>
     */
    loadMenu(): Observable<Array<Menu>> {
     return this.http.get<Array<Menu>>(SicatelUrlsConstants.loadMenuUrl);
    }
}
