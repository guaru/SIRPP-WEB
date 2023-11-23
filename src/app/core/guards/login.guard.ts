import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { SicatelUrlsConstants } from '@sicatel/configs/urls.constants';
import { AuthService } from '@sicatel/core/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate,CanLoad {

    constructor(private router: Router, private authService: AuthService) { }

    /**
     * canActivate
     *
     * @summary If user is not authenticated redirect to Login, if user is authenticated active Path
     * @param route
     * @param state
     * @returns boolean | Observable<boolean>
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(!this.authService.isAuthenticate()) {
            this.router.navigate(Array(SicatelUrlsConstants.pathLogin));
        }
        return true;
    }

     /**
      * canLoad
      *
      * @summary If user is not authenticated redirect to Login, if user is authenticated Load Path
      * @param route
      * @param state
      * @returns boolean | Observable<boolean>
      */
    canLoad(route: Route, segments: Array<UrlSegment>): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(!this.authService.isAuthenticate()) {
            this.router.navigate(Array(SicatelUrlsConstants.pathLogin));
        }
        return true;
    }
}
