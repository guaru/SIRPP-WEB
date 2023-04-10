import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { SicatelCommons } from '@sicatel/configs/commons.constants';

@Injectable({
    providedIn: 'root'
})
export class SessionGuard implements CanActivate,CanLoad {

    constructor(private router: Router, private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.authService.isAuthenticate())
             this.router.navigate([SicatelCommons.PATH_DASHBOARD]);
        return true;
    }

    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.authService.isAuthenticate())
          this.router.navigate([SicatelCommons.PATH_DASHBOARD]);
        return true; 
    }
}
