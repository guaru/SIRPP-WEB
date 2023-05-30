import { environment } from "@sicatel/env/environment";

export class SicatelUrlsConstants {
    static readonly baseUrl = '/api/v1';

    // Dashboard
    static readonly dashboardBaseUrl = `${ SicatelUrlsConstants.baseUrl }/dashboard`;
    static readonly dashboardGetCustomerUrl = `${ SicatelUrlsConstants.dashboardBaseUrl }/get-customer`;

    //authentication
    static readonly authenticationBaseUrl = environment.sicatel_authentication_api;
    static readonly dataSliderUrl = `${ SicatelUrlsConstants.authenticationBaseUrl }/slider`;
    static readonly signInUrl= `${ SicatelUrlsConstants.authenticationBaseUrl }/auth/signin`;
}
