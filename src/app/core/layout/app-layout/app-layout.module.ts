import { NgModule } from '@angular/core';
import { CoreModule } from '@sicatel/core/core.module';
import { AppLayoutRoutingModule } from '@sicatel/core/layout/app-layout/app-layout-routing.module';
import { AppLayoutComponent } from '@sicatel/core/layout/app-layout/app.layout';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ AppLayoutComponent, NavbarComponent ],
    imports: [
        AppLayoutRoutingModule,
        CoreModule,
        CommonModule
    ],
    exports: [ AppLayoutComponent ]
})
export class AppLayoutModule {}
