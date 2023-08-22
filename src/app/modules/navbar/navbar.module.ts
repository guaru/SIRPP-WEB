import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from '@sicatel/core/core.module';
import { SicatelMaskModule } from '@sicatel/modules/mask/mask.module';
import { SicatelMenuComponent } from '@sicatel/modules/navbar/components/menu/menu.component';
import { SicatelNavbarComponent } from '@sicatel/modules/navbar/components/navbar.component';
import { SicatelNavbarContainer } from '@sicatel/modules/navbar/containers/navbar.container';
import { featureKey, reducer } from '@sicatel/modules/navbar/store';
import { MenuEffects } from '@sicatel/modules/navbar/store/effects/menu.effects';
import { PipesModule } from '@sicatel/shared/pipes/pipes.module';


@NgModule({
    declarations: [ SicatelNavbarContainer, SicatelNavbarComponent, SicatelMenuComponent ],
    imports: [
        CoreModule,
        CommonModule,
        MatMenuModule,
        MatSidenavModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatExpansionModule,
        EffectsModule.forFeature(MenuEffects),
        StoreModule.forFeature(featureKey, reducer),
        PipesModule,
        SicatelMaskModule
    ],
    exports: [ SicatelNavbarContainer ]
})
export class NavbarModule {}
