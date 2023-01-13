import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from '@sicatel/core/layout/app-layout/app.layout';
import { applicationRoutes } from '@sicatel/core/routes/application.routes';

const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: applicationRoutes
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class AppLayoutRoutingModule { }
