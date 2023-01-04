import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatDividerModule } from "@angular/material/divider";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { DashboardComponent } from "@sicatel/modules/dashboard/components/dashboard.component";
import { DashboardContainer } from "@sicatel/modules/dashboard/containers/dashboard.container";
import { DashboardRoutingModule } from "@sicatel/modules/dashboard/dashboard-routing.module";
import { featureKey, reducer } from "@sicatel/modules/dashboard/store";
import { effects } from "@sicatel/modules/dashboard/store/effects";

@NgModule({
    declarations: [ DashboardComponent, DashboardContainer ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        StoreModule.forFeature(featureKey, reducer),
        EffectsModule.forFeature(effects),
        MatDividerModule
    ]
})
export class DashboardModule {}