import { Routes } from '@angular/router';

export const applicationRoutes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('@sicatel/modules/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];
