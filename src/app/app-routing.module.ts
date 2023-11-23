import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '@sicatel/core/guards/login.guard';
import { SessionGuard } from '@sicatel/core/guards/session.guard';
import { LoginLayoutComponent } from '@sicatel/core/layout/login-layout/login.layout';

import { SicatelUrlsConstants } from './configs/urls.constants';

const routes: Routes = [
  {
    path: SicatelUrlsConstants.auth,
    component: LoginLayoutComponent,
    children: [
      {
        path: SicatelUrlsConstants.login,
        loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
      },
      {
        path: '',
        redirectTo: SicatelUrlsConstants.login,
        pathMatch: 'full'
      }
    ],
    canActivate: [SessionGuard]

  },
  {
    path: SicatelUrlsConstants.caja,
    loadChildren: () => import('@sicatel/core/layout/app-layout/app-layout.module').then(m => m.AppLayoutModule),
    canLoad: [LoginGuard],
    canActivate: [LoginGuard]
  },
  {
    path: '**',
    redirectTo: SicatelUrlsConstants.auth,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
