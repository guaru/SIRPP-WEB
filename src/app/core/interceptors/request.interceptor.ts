import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SicatelCommons } from '@sicatel/configs/commons.constants';
import { SicatelMessages } from '@sicatel/configs/messsages.constant';
import { UtilsService } from '@sicatel/core/services/utils/utils.service';
import { AuthenticationActions, fromAuthenticacion } from '@sicatel/modules/authentication/store';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RequestInterceptor implements HttpInterceptor {

    constructor(private utilService: UtilsService, private store$: Store<fromAuthenticacion.State>) { }

    /**
     * Intercept
     *
     * @summary Intercept every http request
     * @param request: HttpRequest<any>
     * @param next: HttpHandler
     * @returns Observable<HttpEvent<any>>
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError((rawError: HttpErrorResponse) => {
            if (rawError.status === HttpStatusCode.Unauthorized) {
                if (rawError.error.code === SicatelCommons.codeTokenInvalid) {
                    this.store$.dispatch(AuthenticationActions.signOff());
                    return throwError(SicatelMessages.errorSesionExpired);
                }
            }

            if (rawError.status === HttpStatusCode.Forbidden) {
                return throwError(SicatelMessages.errorForbidden);
            }

            if (rawError.status === HttpStatusCode.GatewayTimeout) {
                return throwError(SicatelMessages.errorGatewayTimeOut);
            }

            if (rawError?.error?.code) {
                return throwError(rawError.error);
            }
            return throwError(SicatelMessages.unexpectedError);

        }));
    }

}
