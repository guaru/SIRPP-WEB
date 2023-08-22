import { Action, createReducer, on } from '@ngrx/store';
import * as MenuActions from '@sicatel/modules/navbar/store/actions/menu.actions';
import { Menu } from '@sicatel/shared/models/menu/menu.interface';
import { IError } from '@sicatel/shared/models/request/error.interface';

export const featureKey  =  'menu';

export interface State {
    links: Array<Menu>;
    loading: boolean;
    error?: IError;
};

export const initialState: State = {
    links: [],
    loading: false,
    error: undefined
};

export const menuReducer = createReducer(
    initialState,
    on(MenuActions.loadMenu, (state) => ({
        ...state,
        loading: true,
        links: []
    })),
    on(MenuActions.loadMenuSuccess, (state, action) => ({
        ...state,
        loading: false,
        links: action.menu
    })),
    on(MenuActions.loadMenuFailure, (state) => ({
        ...state,
        loading: false,
        links: []
    }))
);

export const reducer = (state: State | undefined, action: Action) => menuReducer(state, action);
