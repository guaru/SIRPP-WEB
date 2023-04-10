import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromCarousel from '@sicatel/modules/carousel/store/reducers/carousel.reducer';
import * as CarouselActions from '@sicatel/modules/carousel/store/actions/carousel.actios';
import { ISliderConfig } from '@sicatel/shared/models/slider/slider-config.interface';

@Component({
    selector: 'sicatel-login-layout',
    templateUrl: './login.layout.html',
    styleUrls: [ './login.layout.scss' ]
})
export class LoginLayoutComponent implements OnInit {
    
    version$: Observable<string>;
    date$: Observable<string>;



    constructor(private http: HttpClient, private store: Store<fromCarousel.State>) {
        this.version$ = this.http.get('assets/context/version', { responseType: 'text' });
        this.date$ = this.http.get('assets/context/date', { responseType: 'text' });
    }

    ngOnInit(): void {
        this.store.dispatch(CarouselActions.init({ setting: { bgDefault: true,dark:true,height:200 } as ISliderConfig }));
    }
}
