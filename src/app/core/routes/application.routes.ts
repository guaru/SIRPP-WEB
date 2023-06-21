import { Routes } from '@angular/router';
import { SicatelCommons } from '@sicatel/configs/commons.constants';

export const applicationRoutes: Routes = [
    {
        path: SicatelCommons.dashboard,
        loadChildren: () => import('@sicatel/modules/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
       path: 'apertura-de-caja',
       loadChildren: () => import('@sicatel/modules/apertura-caja/apertura-caja.module').then(m => m.AperturaCajaModule)
    },
    {
        path: '**',
        redirectTo: SicatelCommons.dashboard,
        pathMatch: 'full'
    }
];
