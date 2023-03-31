import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'sicatel-login-layout',
    templateUrl: './login.layout.html',
    styleUrls: [ './login.layout.scss' ]
})
export class LoginLayoutComponent implements OnInit {
    version$: Observable<string>;
    date$: Observable<string>;

    constructor(private http: HttpClient) {
        this.version$ = this.http.get('assets/context/version', { responseType: 'text' });
        this.date$ = this.http.get('assets/context/date', { responseType: 'text' });
    }
    ngOnInit(): void {

    }
}
