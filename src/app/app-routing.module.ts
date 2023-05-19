import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SicatelCommons } from '@sicatel/configs/commons.constants';
import { LoginGuard } from '@sicatel/core/guards/login.guard';
import { SessionGuard } from '@sicatel/core/guards/session.guard';
import { LoginLayoutComponent } from '@sicatel/core/layout/login-layout/login.layout';

const routes: Routes = [
  {
    path: SicatelCommons.auth,
    component: LoginLayoutComponent,
    children: [
      {
        path: SicatelCommons.login,
        loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
      },
      {
        path: '',
        redirectTo: SicatelCommons.login,
        pathMatch: 'full'
      }
    ],
    canActivate: [SessionGuard]

  },
  {
    path: SicatelCommons.caja,
    loadChildren: () => import('@sicatel/core/layout/app-layout/app-layout.module').then(m => m.AppLayoutModule),
    canLoad: [LoginGuard]
  },
  {
    path: '**',
    redirectTo: SicatelCommons.auth,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
