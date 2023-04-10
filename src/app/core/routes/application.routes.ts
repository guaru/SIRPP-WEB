import { Routes } from '@angular/router';
import { SicatelCommons } from '@sicatel/configs/commons.constants';

export const applicationRoutes: Routes = [
    {
        path: SicatelCommons.DASHBOARD,
        loadChildren: () => import('@sicatel/modules/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: '',
        redirectTo: SicatelCommons.DASHBOARD,
        pathMatch: 'full'
    }
];
