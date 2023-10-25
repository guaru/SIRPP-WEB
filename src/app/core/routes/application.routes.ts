import { Routes } from '@angular/router';
import { SicatelCommons } from '@sicatel/configs/commons.constants';
import { PermissionGuard } from '@sicatel/core/guards/permission.guard';
export const applicationRoutes: Routes = [
    {
        path: SicatelCommons.dashboard,
        loadChildren: () => import('@sicatel/modules/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: SicatelCommons.reportMove,
        loadChildren: () => import('@sicatel/modules/reports/report-move/report-move.module').then(m => m.ReportMoveModule),
        canActivate: [PermissionGuard]

    },{
        path: '**',
        redirectTo: SicatelCommons.dashboard,
        pathMatch: 'full'
    }
];
