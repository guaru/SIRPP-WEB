import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SicatelMessages } from '@sicatel/configs/messsages.constant';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RequestInterceptor implements HttpInterceptor {

    constructor() {}

    /**
     * Intercept
     *
     * @summary Intercept every http request
     * @param request: HttpRequest<any>
     * @param next: HttpHandler
     * @returns Observable<HttpEvent<any>>
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError((rawError: HttpErrorResponse) =>{
            if(rawError?.error?.code){
                return throwError(rawError.error);
            }
            return throwError(SicatelMessages.unexpectedError);

        }));
    }

}
