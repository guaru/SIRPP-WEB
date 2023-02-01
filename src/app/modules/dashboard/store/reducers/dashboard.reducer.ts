import { createReducer, on } from '@ngrx/store';
import { IDashboardSettings } from '@sicatel/modules/dashboard/models/dashboard-settings.interface';
import * as DashboardActions from '@sicatel/modules/dashboard/store/actions/dashboard.actions';
import { IError } from '@sicatel/shared/models/request/error.interface';

export const featureKey = 'dashboardReducer';

export interface State {
    settings: IDashboardSettings;
    error?: IError;
    loading: boolean;
}

export const initialState: State = {
    settings: {} as IDashboardSettings,
    error: undefined,
    loading: false
};

export const dashboardReducer = createReducer(
    initialState,
    on(DashboardActions.loadCustomer, state => ({
        ...state,
        loading: true,
        error: undefined
    })),
    on(DashboardActions.loadCustomerSuccess, (state, action) => ({
        ...state,
        settings: {
            ...state.settings,
            name: action.data.name!,
            age: action.data.age!,
            role: action.data.role
        },
        loading: false
    })),
    on(DashboardActions.loadCustomerFailure, (state, action) => ({
        ...state,
        error: action.error
    }))
);
