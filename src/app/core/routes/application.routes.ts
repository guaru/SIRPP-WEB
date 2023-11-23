import { Routes } from '@angular/router';
import { SicatelCommons } from '@sicatel/configs/commons.constants';
import { SicatelUrlsConstants } from '@sicatel/configs/urls.constants';
import { LoginGuard } from '@sicatel/core/guards/login.guard';
import { PermissionGuard } from '@sicatel/core/guards/permission.guard';

export const applicationRoutes: Routes = [
    {
        path: SicatelUrlsConstants.dashboard,
        loadChildren: () => import('@sicatel/modules/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [LoginGuard]
    },
    {
        path: SicatelUrlsConstants.pathConsultaSaldo,
        loadChildren: () => import('@sicatel/modules/consulta-saldo/consulta-saldo.module').then(m => m.ConsultaSaldoModule),
        canActivate: [LoginGuard]
    },
    {
        path: SicatelCommons.reportMove,
        loadChildren: () => import('@sicatel/modules/reports/report-move/report-move.module').then(m => m.ReportMoveModule),
        canActivate: [PermissionGuard]

    },{
        path: '**',
        redirectTo: SicatelUrlsConstants.dashboard,
        pathMatch: 'full'
    }
];
