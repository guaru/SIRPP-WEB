import { Overlay } from '@angular/cdk/overlay';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MAT_TOOLTIP_SCROLL_STRATEGY } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RequestInterceptor } from '@sicatel/core/interceptors/request.interceptor';
import { TokenInterceptor } from  '@sicatel/core/interceptors/token.interceptor';
import { LoginLayoutModule } from '@sicatel/core/layout/login-layout/login-layout.module';
import { AuthenticationEffects } from '@sicatel/modules/authentication/store/effects/authentication.effects';
import * as authenticationReducer  from '@sicatel/modules/authentication/store/reducers/authentication.reducers';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [],
  imports: [
    LoginLayoutModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    EffectsModule.forFeature([AuthenticationEffects]),
    StoreModule.forFeature(authenticationReducer.featureKey,authenticationReducer.authenticationReducer),
    ToastrModule.forRoot({
      timeOut: 8000,
      positionClass: 'toast-bottom-right'
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    {
      provide: MAT_TOOLTIP_SCROLL_STRATEGY,
      deps: [Overlay],
      useFactory: (overlay: Overlay) => () => overlay.scrollStrategies.close()
    }
  ]
})
export class RootModule {
  constructor(@Optional() @SkipSelf() parentModule: RootModule) {
    if (parentModule) {
      throw new Error(`${ parentModule } has already been loaded. Import Core module in the RootModule only.`);
    }
  }
}
