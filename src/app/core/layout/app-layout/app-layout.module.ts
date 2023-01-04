import { NgModule } from "@angular/core";
import { CoreModule } from "@sicatel/core/core.module";
import { AppLayoutComponent } from "@sicatel/core/layout/app-layout/app.layout";
import { AppLayoutRoutingModule } from "@sicatel/core/layout/app-layout/app-layout-routing.module";

@NgModule({
    declarations: [ AppLayoutComponent ],
    imports: [
        AppLayoutRoutingModule,
        CoreModule
    ],
    exports: [ AppLayoutComponent ]
})
export class AppLayoutModule {} 