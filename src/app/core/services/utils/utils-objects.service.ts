import { SicatelCommons } from '@sicatel/configs/commons.constants';
import { ISaldo } from '@sicatel/shared/models/consulta-saldo/saldo.interface';

export class UtilsObjects {

    static copyIsNotEmptyProperties(source: any, target: any): any {
        Object.keys(source).forEach((key) => {
            if (!UtilsObjects.isEmpty(source[key])) {
                target[key] = source[key];
            }
        });
    }

    static isEmpty(value: string | undefined): boolean {
        return !value || value === undefined || value.trim() === '';
    }


    static csPrepareComplementos(saldos: Array<ISaldo>, complemento: ISaldo): Array<ISaldo> {
        const index = saldos.findIndex(item => item.plataforma === SicatelCommons.bes);
        const saldoCustom = { ...saldos[index] } as ISaldo;
        UtilsObjects.copyIsNotEmptyProperties(complemento, saldoCustom);
        return saldos.map((item, i) => i === index ? saldoCustom : item);
    }
}
