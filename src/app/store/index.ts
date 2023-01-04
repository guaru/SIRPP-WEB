import { InjectionToken } from '@angular/core';
import * as fromRouter from '@ngrx/router-store';
import { Action, ActionReducerMap } from '@ngrx/store';

export interface AppState {
    router: fromRouter.RouterReducerState<any>;
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState, Action>>('Root reducers', {
    factory: () => ({
        router: fromRouter.routerReducer
    })
})