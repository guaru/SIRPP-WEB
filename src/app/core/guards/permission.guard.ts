import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { SicatelCommons } from '@sicatel/configs/commons.constants';
import { SicatelPermissions } from '@sicatel/configs/sicatel-permissions';
import { SicatelUrlsConstants } from '@sicatel/configs/urls.constants';
import { AuthService } from '@sicatel/core/services/auth.service';
import * as fromAuthentication from '@sicatel/modules/authentication/store/reducers/authentication.reducers';
import * as AuthenticationSelectors from '@sicatel/modules/authentication/store/selectors/authentication.selectors';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PermissionGuard implements CanActivate {
    permission$!: Observable<string>;
    constructor(private router: Router, private authService: AuthService, private store: Store<fromAuthentication.State>) { }

    /**
     * Can active path
     *
     * @summary If user is authenticated redirect to dashboard, if user not authenticate active path {Login}
     * @param route
     * @param state
     * @returns
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (state.url.includes(SicatelCommons.reportMove) && (this.getPermisse().indexOf(SicatelPermissions.reportMove) === -1)) {
            this.router.navigate([SicatelUrlsConstants.pathDashboard]);
        }
        return true;
    }

    /***
    * permisse from token
    *
    * @summary Get permisse from token
    * @param
    * @returns void
    */
    getPermisse(): Array<string> {

        let permission!: string;
        this.permission$ = this.store.select(AuthenticationSelectors.selectAuthenticationUserPermision);
        const userSubscription = this.permission$.subscribe(permissions => {
            permission = permissions;
        });

        return permission.split(',');
    }
}
