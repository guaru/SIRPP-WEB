import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { SicatelCommons } from '@sicatel/configs/commons.constants';
import { AuthService } from '@sicatel/core/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SessionGuard implements CanActivate,CanLoad {

    constructor(private router: Router, private authService: AuthService) { }

    /**
     * Can active path
     *
     * @summary If user is authenticated redirect to dashboard, if user not authenticate active path {Login}
     * @param route
     * @param state
     * @returns
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.authService.isAuthenticate())
             {
                this.router.navigate([SicatelCommons.pathDashboard]);
            }
        return true;
    }

    /**
     * Can Load path
     *
     * @summary If user is authenticated redirect to dashboard, if user not authenticate load path {Login}
     * @param route
     * @param state
     * @returns
     */
    canLoad(route: Route, segments: Array<UrlSegment>): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.authService.isAuthenticate())
          {
           this.router.navigate([SicatelCommons.pathDashboard]);
        }
        return true;
    }
}
