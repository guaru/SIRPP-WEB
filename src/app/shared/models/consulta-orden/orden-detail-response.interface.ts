export interface IOrdenDetailResponse extends Response {
    invoiceItems:  Array<InvoiceItem>;
    orderInfo:     OrderInfo;
    orderInvoice:  OrderInvoice;
    regionCli:     string;
    firstName:     string;
    middleName:    string;
    lastName:      string;
    serviceNumber: string;
    acctCode:      string;
    legadoPay:     null;
}

export interface InvoiceItem {
    invoiceItemId:  null;
    payMode:        string;
    feeType:        null;
    chargeCode:     string;
    chargeName:     null;
    unitPrice:      number;
    quantity:       number;
    amount:         number;
    includedTax:    string;
    taxAmount:      number;
    discountAmount: number;
    itemDetail:     ItemDetail;
    remark:         null;
    concept:        Concept;
}

export interface Concept {
    idConpeto:    number;
    concepto:     string;
    gravable:     string;
    afectaSis:    string;
    indicador1:   null;
    indicador2:   null;
    indicador3:   string;
    indicador4:   string;
    fechoraAct:   number;
    numImpresion: number;
    unidadMedida: string;
}

export interface ItemDetail {
    taxInfo:      Array<any>;
    penaltyInfo:  null;
    waiveInfo:    null;
    discountInfo: Array<any>;
    feeSource:    null;
    extPropInfo:  Array<EXTPropInfo>;
}

export interface EXTPropInfo {
    code:  string;
    value: string;
}

export interface OrderInfo {
    orderId:           number;
    serviceNumber:     string;
    status:            string;
    statusDate:        number;
    accessChannelType: string;
    createOperId:      number;
    createDeptId:      number;
    createTime:        number;
    remark:            null;
    orderType:         string;
    reqApplyTime:      null;
    businessCode:      string;
    completionDate:    null;
    orderProperty:     Array<any>;
}

export interface OrderInvoice {
    amount:         number;
    discountAmount: number;
    waiveAmount:    null;
    includeTax:     string;
    taxAmount:      number;
    status:         string;
    statusDesc:     string;
    invoiceItem:    null;
}

