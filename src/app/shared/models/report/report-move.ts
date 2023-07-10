
/**
* interface para request del endpoint.
* @interface
*/
export interface IreportRequest {
  userName: String;
  dateInit: string;
  dateEnd: string;
  region: string;
  plataformSelect: String;
}

/**
* interface para respuesta de endpoint.
* @interface
*/
export interface IreportResponse {
  codigoRespuesta: string
  mensaje: string
  uuid: string
  error: any
  folios: number
  plataformaMovimientos: IPlataformaMovimiento[]
}

export interface IPlataformaMovimiento {
  nombrePlataforma: string
  movimientos: IMovimiento[]
}

export interface IMovimiento {
  folio: number
  region: number
  idCentro: number
  foliosicatel: number
  plataforma: string
  fecha: string
  infoConceptoList: IInfoConceptoList[]
  infoFormaList: IInfoFormaList[]
}

export interface IInfoConceptoList {
  TOTAL: string
  CONCEPTO_DESC: string
  FOLIOINI?: string
  IDCONCEPTO: string
  NUMBATCH: string
  CAJA: string
  CUENTA: string
  REGIONCLIENTE: string
  FOLIOECAC: string
  FACTURASAP: string
  ESTATUS: string
  TOTALCONCEPTOS: string
  TELEFONO: string
  FOLIOFIN?: string
  IDPOSICION: string
  NOMBRECLIENTE: string
  CODIGO_M2K: string
  CANTIDAD: string
  PAGOBES: string
  ESTATUS_BES?: string
  ORDER_ID?: string
}

export interface IInfoFormaList {
  ESTATUSFP: string
  IDTIPOPAGO: string
  TIPOPAGO_DESC: string
  NUMDOC: string
  IDINSTITUCION: string
  ABONADO: string
}