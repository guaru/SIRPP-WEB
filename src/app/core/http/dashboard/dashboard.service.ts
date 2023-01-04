import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IDashboardSettings } from '@sicatel/modules/dashboard/models/dashboard-settings.interface';
import { SicatelUrlsConstants } from '@sicatel/configs/urls.constants';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    constructor(private http: HttpClient) { }

    /**
     * Load Customer
     *
     * @summary: Make a call to backend to get customer data
     * @returns Observable<IDashboardSettings>
     */
    loadCustomer(): Observable<IDashboardSettings> {
        return this.http.get(SicatelUrlsConstants.DASHBOARD_GET_CUSTOMER_URL).pipe(map(response => response as IDashboardSettings));
    }
}