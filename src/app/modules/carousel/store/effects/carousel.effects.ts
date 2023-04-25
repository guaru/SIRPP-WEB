import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SliderService } from '@sicatel/core/http/slider/slider.service';
import { UtilsService } from '@sicatel/core/services/utils/utils.service';
import * as CarouselActions from '@sicatel/modules/carousel/store/actions/carousel.actios';
import { IError } from '@sicatel/shared/models/request/error.interface';
import { ISlider } from '@sicatel/shared/models/slider/slider.interface';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';

@Injectable()
export class CarouselEffects {

    loadDataeffect$ = createEffect(() => this.actions$.pipe(
        ofType(CarouselActions.loadData),
        exhaustMap(() => this.sliderService.loadData().pipe(
            map((data: Array<ISlider>) => CarouselActions.loadSuccess({ data })),
            catchError((error: IError) => of(CarouselActions.loadFailure({ error })))
        ))
    ));

    loadFailure$ = createEffect(() => this.actions$.pipe(
        ofType(
            CarouselActions.loadFailure
        ),
        tap(({ error }) =>
            this.utilService.showErrorMessage(error)
        )
    ), { dispatch: false });


    constructor(private actions$: Actions, private sliderService: SliderService, private utilService: UtilsService) { }

}
