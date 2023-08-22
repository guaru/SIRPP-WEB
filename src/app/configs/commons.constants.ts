export class SicatelCommons {
    static readonly punto = '.';
    static readonly caja = 'caja';
    static readonly dashboard = 'dashboard';

    static readonly pathDashboard = `/${SicatelCommons.caja}/${SicatelCommons.dashboard}`;

    // authentication
    static readonly auth = 'auth';
    static readonly login = 'login';
    static readonly pathLogin = `/${SicatelCommons.auth}/${SicatelCommons.login}`;

    // reportes
    static readonly reports = 'report';

    // reporte de movimientos
    static readonly reportMove  = 'reporte-de-movimientos';
    static readonly pathReportMove = `${SicatelCommons.reports}/${SicatelCommons.reportMove}`;
}
