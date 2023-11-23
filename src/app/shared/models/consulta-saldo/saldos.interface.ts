import { ISaldo } from '@sicatel/shared/models/consulta-saldo/saldo.interface';
export class ISaldos {
    constructor(
        public saldos?: Array<ISaldo>,
        public plataforma?: string,
        public has2Platforms?: boolean,
        public cuentaResponsabilidadPago?: string,
        public error?: boolean,
        public message?: string) { }
}
