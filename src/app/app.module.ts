import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SicatelMaskModule } from '@sicatel//modules/mask/mask.module';
import { AppRoutingModule } from '@sicatel/app-routing.module';
import { AppComponent } from '@sicatel/app.component';
import { RootModule } from '@sicatel/core/root.module';
import { environment } from '@sicatel/env/environment';
import { ROOT_REDUCERS } from '@sicatel/store';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    RootModule,
    StoreModule.forRoot(ROOT_REDUCERS, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true/*, TODO: fix it
        strictActionSerializability: true,
        strictStateSerializability: true*/
      }
    }),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal
    }),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
       maxAge: 25,
       logOnly: environment.production
    }),
   SicatelMaskModule,
   NgbModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
