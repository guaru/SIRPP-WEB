import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'sicatel-login-layout',
    templateUrl: './login.layout.html',
    styleUrls: [ './login.layout.scss' ]
})
export class LoginLayoutComponent {
    version$: Observable<string>;

    constructor(private http: HttpClient) {
        this.version$ = this.http.get('assets/context/version', { responseType: 'text' });
    }
}
