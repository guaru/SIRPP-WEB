export class SicatelUrlsConstants {
    private static readonly BASE_URL = '/api/v1';

    // Dashboard
    private static readonly DASHBOARD_BASE_URL = `${ SicatelUrlsConstants.BASE_URL }/dashboard`;
    static readonly DASHBOARD_GET_CUSTOMER_URL = `${ SicatelUrlsConstants.DASHBOARD_BASE_URL }/get-customer`;
}