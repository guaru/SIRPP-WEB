import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '@sicatel/core/core.module';
import { AppLayoutRoutingModule } from '@sicatel/core/layout/app-layout/app-layout-routing.module';
import { AppLayoutComponent } from '@sicatel/core/layout/app-layout/app.layout';
import { NavbarComponent } from '@sicatel/core/layout/app-layout/navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    declarations: [ AppLayoutComponent, NavbarComponent, SidebarComponent ],
    imports: [
        AppLayoutRoutingModule,
        CoreModule,
        CommonModule
    ],
    exports: [ AppLayoutComponent ]
})
export class AppLayoutModule {}
