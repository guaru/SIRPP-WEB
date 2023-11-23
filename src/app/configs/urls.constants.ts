import { environment } from '@sicatel/env/environment';

export class SicatelUrlsConstants {
    static readonly baseUrl = '/api/v1';

    // Dashboard
    static readonly dashboardBaseUrl = `${ SicatelUrlsConstants.baseUrl }/dashboard`;
    static readonly dashboardGetCustomerUrl = `${ SicatelUrlsConstants.dashboardBaseUrl }/get-customer`;

    //authentication
    static readonly authenticationBaseUrl = environment.sicatel_authentication_api;
    static readonly dataSliderUrl = `${ SicatelUrlsConstants.authenticationBaseUrl }/slider`;
    static readonly signInUrl= `${ SicatelUrlsConstants.authenticationBaseUrl }/auth/signin`;
    static readonly loadMenuUrl= `${ SicatelUrlsConstants.authenticationBaseUrl }/menu`;

    //CONSULTA SALDO
    static readonly consultaSaldoBaseUrl =  environment.sicatel_consulta_saldo_api;
    static readonly consultaSaldoUrl =  `${SicatelUrlsConstants.consultaSaldoBaseUrl}/consulta-saldo/view`;
    static readonly consultaSaldoComplementoUrl =  `${SicatelUrlsConstants.consultaSaldoBaseUrl}/consulta-saldo/complemento`;


    static readonly caja = 'caja';
    static readonly dashboard = 'dashboard';
    static readonly auth = 'auth';
    static readonly login = 'login';
    static readonly registroConsulta = 'registro-consulta';
    static readonly consultaSaldo = 'consulta-de-saldos';
    static readonly pathDashboard = `/${SicatelUrlsConstants.caja}/${SicatelUrlsConstants.dashboard}`;
    static readonly pathLogin = `/${SicatelUrlsConstants.auth}/${SicatelUrlsConstants.login}`;
    static readonly pathConsultaSaldo = `${SicatelUrlsConstants.registroConsulta}/${SicatelUrlsConstants.consultaSaldo}`;
    //Report move
    static readonly reportMoveBaseUrl = environment.sicatel_report_move_api;
    static readonly dataGetReportMove = `${SicatelUrlsConstants.reportMoveBaseUrl}/report/move`;
}
