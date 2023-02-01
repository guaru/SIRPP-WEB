import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DashboardComponent } from '@sicatel/modules/dashboard/components/dashboard.component';
import { DashboardContainer } from '@sicatel/modules/dashboard/containers/dashboard.container';
import { DashboardRoutingModule } from '@sicatel/modules/dashboard/dashboard-routing.module';
import { DashboardEffects } from '@sicatel/modules/dashboard/store/effects/dashboard.effects';
import * as dashboardReducer from '@sicatel/modules/dashboard/store/reducers/dashboard.reducer';

@NgModule({
    declarations: [ DashboardComponent, DashboardContainer ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        EffectsModule.forFeature([ DashboardEffects ]),
        StoreModule.forFeature(dashboardReducer.featureKey, dashboardReducer.dashboardReducer),
        MatDividerModule
    ]
})
export class DashboardModule {}
