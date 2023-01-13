import { NgModule } from '@angular/core';
import { CoreModule } from '@sicatel/core/core.module';
import { AppLayoutRoutingModule } from '@sicatel/core/layout/app-layout/app-layout-routing.module';
import { AppLayoutComponent } from '@sicatel/core/layout/app-layout/app.layout';

@NgModule({
    declarations: [ AppLayoutComponent ],
    imports: [
        AppLayoutRoutingModule,
        CoreModule
    ],
    exports: [ AppLayoutComponent ]
})
export class AppLayoutModule {}
