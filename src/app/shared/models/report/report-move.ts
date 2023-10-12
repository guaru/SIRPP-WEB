
  /*** interface for request of endpoind
  * @interface
  */
export interface IReportRequest {
  userName: string;
  dateInit: string;
  dateEnd: string;
  plataformSelect: string;
}

  /*** interface for response of endpoint.
  * @interface
  */
export interface IReportResponse {
  codigoRespuesta: string;
  mensaje: string;
  uuid: string;
  error: IErrorResponseReportMove;
  folios: number;
  plataformaMovimientos: Array<IPlataformaMovimiento>;
}

  /*** interface for move
  * @interface
  */
export interface IPlataformaMovimiento {
  nombrePlataforma: string;
  movimientos: Array<IMovimiento>;
}

  /*** interface for IMovimiento
  * @interface
  */
export interface IMovimiento {
  folio: number;
  region: number;
  idCentro: number;
  foliosicatel: number;
  plataforma: string;
  fecha: string;
  infoConceptoList: Array<IInfoConceptoList>;
  infoFormaList: Array<IInfoFormaList>;
}

  /*** interface for concept
  * @interface
  */
export interface IInfoConceptoList {
  total: string;
  conceptoDesc: string;
  folioini?: string;
  idconcepto: string;
  numbatch: string;
  caja: string;
  cuenta: string;
  regioncliente: string;
  folioecac: string;
  facturasap: string;
  estatus: string;
  totalconceptos: string;
  telefono: string;
  foliofin?: string;
  idposicion: string;
  nombrecliente: string;
  codigoM2k: string;
  cantidad: string;
  pagobes: string;
  estatusBes?: string;
  orderId?: string;
  plataforma: string;
}

  /*** interface for payment
  * @interface
  */
export interface IInfoFormaList {
  estatusfp: string;
  idtipopago: string;
  tipopagoDesc: string;
  numdoc: string;
  idinstitucion: string;
  abonado: string;
}

  /*** interface for error
  * @interface
  */
export interface IErrorResponseReportMove {
  codigoError: string;
  descError: string;
}

export interface IDataReportMove {
  data: Array<IMovimiento>;
}
