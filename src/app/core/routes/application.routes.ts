import { Routes } from "@angular/router";

export const APPLICATION_ROUTES: Routes = [
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