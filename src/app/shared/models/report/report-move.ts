export interface IreportMoveDetail {
    folio: number;
    fecha: string;
    idCentro: number;
    idRegion: number;
    folioSicatel: number;
    plataforma: string;
    concepto: Array<IDetail> ;
  }
  
  export interface IDetail {
    cCaja : string;
    cCantidad : string;
    cConcepto : string;
    cCuenta : string;
    cCuentaOriginal : string;
    cFacturaSap : string;
    cFolioIni : string;
    cFolioFin : string;
    cNombreCliente : string;
    cRegionCliente : string;
    cTelefono : string;
    cTotal : string;
    cnumBatch : string;
    cIdPosicion : string;
    cFolioEcac : string;
    cEstatus : string;
    cCodigoM2K : string;
    cNumeroOrden : string;
    cPlataforma : string;
    cEstatusBes : string;
    
  }
  