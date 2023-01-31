import { IDashboardSettings } from '@sicatel/modules/dashboard/models/dashboard-settings.interface';
import { ERole } from '@sicatel/shared/enums/roles.emun';

export class DashboardTestConstants {

    static readonly dashboardSettings: IDashboardSettings = {
        age: 22,
        name: 'SICATEL',
        role: ERole.ROLE_ADMIN
    };
}
