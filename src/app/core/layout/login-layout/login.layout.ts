import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
    selector: 'sicatel-login-layout',
    templateUrl: './login.layout.html',
    styleUrls: [ './login.layout.scss' ]
})
export class LoginLayoutComponent {
    version$: Observable<string>;

    constructor(private http: HttpClient, private router: Router) {
        this.version$ = this.http.get('assets/context/version', { responseType: 'text' });
    }

    /**
     * Navigate To Dashboard
     *
     * @summary Navigate to dashboard
     * @returns void
     */
    navigateToDashboard(): void {
        this.router.navigate([ 'home/dashboard' ], { queryParams: { name: 'Telcel_Sicatel' } });
    }
}