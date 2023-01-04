import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { APPLICATION_ROUTES } from "@sicatel/core/routes/application.routes";
import { AppLayoutComponent } from "@sicatel/core/layout/app-layout/app.layout";

const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: APPLICATION_ROUTES
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