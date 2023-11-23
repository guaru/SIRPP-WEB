import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CoreModule } from '@sicatel/core/core.module';
import { AppLayoutRoutingModule } from '@sicatel/core/layout/app-layout/app-layout-routing.module';
import { AppLayoutComponent } from '@sicatel/core/layout/app-layout/app.layout';
import { NavbarModule } from '@sicatel/modules/navbar/navbar.module';


@NgModule({
    declarations: [AppLayoutComponent],
    exports: [AppLayoutComponent],
    imports: [
        AppLayoutRoutingModule,
        CoreModule,
        CommonModule,
        MatSidenavModule,
        NavbarModule
    ]
})
export class AppLayoutModule {}
