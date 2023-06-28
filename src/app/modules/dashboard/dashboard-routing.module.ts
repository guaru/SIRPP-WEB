import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SicatelCommons } from '@sicatel/configs/commons.constants';
import { DashboardContainer } from '@sicatel/modules/dashboard/containers/dashboard.container';


const routes: Routes = [
    {
        path: '',
        component: DashboardContainer,
        pathMatch: 'full'
    },
    {
     path: '**',
     redirectTo: SicatelCommons.dashboard,
     pathMatch: 'full'
   }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class DashboardRoutingModule {}
