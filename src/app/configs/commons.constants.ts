import { MatDialogConfig } from '@angular/material/dialog';
import { Option } from '@sicatel/shared/models/option.interface';

export class SicatelCommons {
    static readonly punto = '.';
    static readonly bes = 'BES';
    static readonly codeTokenInvalid = 'sicatel-authentication-0001';
    static readonly codeRegionLineaNotFound = 'sicatel-consulta-saldo-1004';
    static readonly regiones: Array<Option> = [{
        label: 'R1',
        value: '1'
    },
    {
        label: 'R2',
        value: '2'
    },
    {
        label: 'R3',
        value: '3'
    },
    {
        label: 'R4',
        value: '4'
    },
    {
        label: 'R5',
        value: '5'
    },
    {
        label: 'R6',
        value: '6'
    },
    {
        label: 'R7',
        value: '7'
    },
    {
        label: 'R8',
        value: '8'
    },
    {
        label: 'R9',
        value: '9'
    }
    ];

    // reportes
    static readonly reports = 'report';

    // reporte de movimientos
    static readonly reportMove = 'reporte-de-movimientos';
    static readonly pathReportMove = `${SicatelCommons.reports}/${SicatelCommons.reportMove}`;

    static configDialog = {
        hasBackdrop: true,
        disableClose: true,
        width: '30%',
        position: {
            top: '5%'
        },
        data: {}
    } as MatDialogConfig;

}
