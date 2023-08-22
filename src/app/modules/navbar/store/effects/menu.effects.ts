import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MenuService } from '@sicatel/core/http/menu/menu.service';
import { UtilsService } from '@sicatel/core/services/utils/utils.service';
import * as MenuActions from '@sicatel/modules/navbar/store/actions/menu.actions';
import { Menu } from '@sicatel/shared/models/menu/menu.interface';
import { IError } from '@sicatel/shared/models/request/error.interface';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';

@Injectable()
export class MenuEffects {

    loadMenu$ = createEffect(() => this.actions$.pipe(
        ofType(MenuActions.loadMenu),
        exhaustMap(() => this.menuService.loadMenu().pipe(
          map((menu: Array<Menu>) => MenuActions.loadMenuSuccess({ menu })),
          catchError((action) => of(MenuActions.loadMenuFailure(action)))
        ))));

    actionFailure$ = createEffect(() => this.actions$.pipe(
        ofType(
        MenuActions.loadMenuFailure
        ),
        tap( (action: { error: IError }) => this.utilsService.showErrorMessage(action.error))
    ), { dispatch: false });

    constructor(
    private actions$: Actions,
    private utilsService: UtilsService,
    private menuService: MenuService
    ) { }
}
