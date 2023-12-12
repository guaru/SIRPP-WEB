import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SicatelUrlsConstants } from '@sicatel/configs/urls.constants';
import { AuthService } from '@sicatel/core/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PermissionGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthService) {}

    /**
     * Can active path
     *
     * @summary If user is authenticated redirect to dashboard, if user not authenticate active path {Login}
     * @param route
     * @param state
     * @returns
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (!this.authService.checkPermission(route.data['permiso'], true)) {
            this.router.navigate([SicatelUrlsConstants.pathDashboard]);
        }
        return true;
    }
}
