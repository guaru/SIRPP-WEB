import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from '@sicatel/core/layout/login-layout/login.layout';

const routes: Routes = [
  {
    path: 'auth',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ]/*, TODO: add implementation for loginGuard
    canActivate: [ LoginGuard ]*/
  },
  {
    path: 'caja',
    loadChildren: () => import('@sicatel/core/layout/app-layout/app-layout.module').then(m => m.AppLayoutModule)
    /*, TODO: Add implementation for childrenguard
    canActivate: [ LoginGuard ]*/
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
