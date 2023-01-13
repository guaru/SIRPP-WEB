import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SicatelUrlsConstants } from '@sicatel/configs/urls.constants';
import { IDashboardSettings } from '@sicatel/modules/dashboard/models/dashboard-settings.interface';
import { map, Observable } from 'rxjs';

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
        return this.http.get(SicatelUrlsConstants.dashboardGetCustomerUrl).pipe(map(response => response as IDashboardSettings));
    }
}
