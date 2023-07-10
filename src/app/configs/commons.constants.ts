export class SicatelCommons
{
    static readonly punto = '.';
    static readonly caja = 'caja';
    static readonly dashboard = 'dashboard';
    static readonly auth = 'auth';
    static readonly login = 'login';
    static readonly pathDashboard = `/${SicatelCommons.caja}/${SicatelCommons.dashboard}`;
    static readonly pathLogin = `/${SicatelCommons.auth}/${SicatelCommons.login}`;
    static readonly reports = 'report';
    static readonly reportMove  = 'reporte-de-movimientos';
    static readonly pathReportMove = `${SicatelCommons.reports}/${SicatelCommons.reportMove}`;
}
