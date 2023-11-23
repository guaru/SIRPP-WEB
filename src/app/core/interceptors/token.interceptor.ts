import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@sicatel/core/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this.authService.isAuthenticate()){
            const authReq = req.clone({
                headers: req.headers.set('Authorization',`Bearer ${this.authService.readToken()!.accessToken}` )
                    .set('x-region',`R${this.authService.readToken().user.idRegion}`)
            });
            return next.handle(authReq);
        }else{
            return next.handle(req);
        }
    }
}
