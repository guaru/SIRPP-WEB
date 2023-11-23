import { TypeCsComplemento } from '@sicatel/shared/enums/type-cs-complement';

export interface IConsultaSaldoRequest {
    cuenta: string;
    telefono: string;
    region: number;
    plataforma: string;
    typeCs?: TypeCsComplemento;
}
