import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CarouselComponent } from '@sicatel/modules/carousel/components/carousel.component';
import {CarouselContainer} from '@sicatel/modules/carousel/containers/carousel.container';
import {CarouselEffects} from  '@sicatel/modules/carousel/store/effects/carousel.effects';
import * as carouselReducer from '@sicatel/modules/carousel/store/reducers/carousel.reducer';

@NgModule({
  declarations: [
    CarouselComponent,
    CarouselContainer
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([ CarouselEffects ]),
    StoreModule.forFeature(carouselReducer.featureKey, carouselReducer.carouselReducer)
  ],exports: [
    CarouselContainer
  ]
})
export class CarouselModule { }
