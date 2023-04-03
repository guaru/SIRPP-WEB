 import { Injectable } from '@angular/core'; 
 import { Actions, createEffect, ofType } from '@ngrx/effects'; 
 import { catchError, exhaustMap, map, of, tap } from 'rxjs'; 
import { SliderService } from '@sicatel/core/http/slider/slider.service';
import * as CarouselActions from '@sicatel/modules/carousel/store/actions/carousel.actios';
import { Slider } from '@sicatel/shared/models/slider/slider.interface';
import { IError } from '@sicatel/shared/models/request/error.interface';
import { UtilsService } from '@sicatel/core/services/utils/utils.service';

 @Injectable() 
 export class CarouselEffects { 

 loadDataeffect$ = createEffect(() => this.actions$.pipe(
            ofType(CarouselActions.loadData),
            exhaustMap(() => this.sliderService.loadData().pipe(
            map((data: Slider[]) => CarouselActions.loadSuccess({data}) ),
            catchError((error: IError) => of(CarouselActions.loadFailure({error})))
        ))));

loadFailure$ =  createEffect(() => this.actions$.pipe(
    ofType(
        CarouselActions.loadFailure
    ),
    tap( ({error}) => 
       this.utilService.showErrorMessage({code:"101",message:"Fallo carga carousel"} as IError)
       )
), { dispatch: false });


 constructor(private actions$: Actions, private sliderService: SliderService, private utilService: UtilsService){} 
 
}