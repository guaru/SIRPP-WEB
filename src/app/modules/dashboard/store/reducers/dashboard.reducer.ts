import { createReducer, on } from '@ngrx/store';
import * as DashboardActions from '@sicatel/modules/dashboard/store/actions/dashboard.actions';
import { ERole } from '@sicatel/shared/enums/roles.emun';
import { IError } from '@sicatel/shared/models/request/error.interface';

export const featureKey = 'dashboard-reducer';

export interface State {
    name?: string;
    age?: number;
    role?: ERole;
    error?: IError;
}

export const initialState: State = {
    name: undefined,
    age: undefined,
    role: undefined,
    error: undefined
};

export const dashboardReducer = createReducer(
    initialState,
    on(DashboardActions.loadCustomer, state => ({
        ...state,
        name: '',
        age: 0,
        role: undefined,
        error: undefined
    })),
    on(DashboardActions.loadCustomerSuccess, (state, action) => ({
        ...state,
        name: action.data.name,
        age: action.data.age,
        role: action.data.role
    })),
    on(DashboardActions.loadCustomerFailure, (state, action) => ({
        ...state,
        error: action.error
    }))
);
