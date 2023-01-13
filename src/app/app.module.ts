import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from '@sicatel/app-routing.module';
import { AppComponent } from '@sicatel/app.component';
import { RootModule } from '@sicatel/core/root.module';
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
    EffectsModule.forRoot()
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
