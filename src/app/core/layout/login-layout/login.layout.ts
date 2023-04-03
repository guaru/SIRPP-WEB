import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromCarousel  from '@sicatel/modules/carousel/store/reducers/carousel.reducer';
import * as CarouselSelectors from  '@sicatel/modules/carousel/store/selectors/carousel.selectors';

@Component({
    selector: 'sicatel-login-layout',
    templateUrl: './login.layout.html',
    styleUrls: [ './login.layout.scss' ]
})
export class LoginLayoutComponent implements OnInit {
    
    version$: Observable<string>;
    date$: Observable<string>;



    constructor(private http: HttpClient, private store: Store<fromCarousel.State> ) {
        this.version$ = this.http.get('assets/context/version', { responseType: 'text' });
        this.date$ = this.http.get('assets/context/date', { responseType: 'text' });
    }

    ngOnInit(): void {

    }
}
