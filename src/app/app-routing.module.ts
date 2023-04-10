import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginLayoutComponent } from '@sicatel/core/layout/login-layout/login.layout';
import { LoginGuard } from '@sicatel/core/guards/login.guard';
import { SessionGuard } from '@sicatel/core/guards/session.guard';
import { SicatelCommons } from './configs/commons.constants';

const routes: Routes = [
  {
    path: SicatelCommons.AUTH,
    component: LoginLayoutComponent,
    children: [
      {
        path: SicatelCommons.LOGIN,
        loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
      },
      {
        path: '',
        redirectTo: SicatelCommons.LOGIN,
        pathMatch: 'full'
      }
    ],
    canActivate: [SessionGuard]

  },
  {
    path: SicatelCommons.CAJA,
    loadChildren: () => import('@sicatel/core/layout/app-layout/app-layout.module').then(m => m.AppLayoutModule),
    canLoad: [LoginGuard]
  },
  {
    path: '**',
    redirectTo: SicatelCommons.AUTH,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
