import { createAction, props } from '@ngrx/store';
import { IDashboardSettings } from '@sicatel/modules/dashboard/models/dashboard-settings.interface';
import { IError } from '@sicatel/shared/models/request/error.interface';

export const loadCustomer = createAction(
    '[Dashboard] Load customer'
);

export const loadCustomerSuccess = createAction(
    '[Dashboard] Load customer success',
    props<{ data: IDashboardSettings }>()
);

export const loadCustomerFailure = createAction(
    '[Dashboard] Load customer failure',
    props<{ error: IError }>()
);
