export interface  IToken{
    sub:  string;
    iat:  number;
    exp:  number;
    user: IUser;
    accessToken: string;
    type: string;
}

export interface IUser {
    idUsuario:                string;
    nombreUsuario:            string;
    idGrupo:                  string;
    numeroEmpleado:           string;
    fuerzaVenta:              null;
    ip:                       string;
    nivelFuerzaVenta:         null;
    posicion:                 string;
    telefono:                 number;
    claveUsuarioDistribuidor: null;
    tipo:                     string;
    estatus:                  null;
    uuid:                     string;
    region:                   string;
    centro:                   string;
    idRegion:                 number;
    numCaja:                  number;
    oficinaVentas:            string;
    idCentro:                 string;
    permisos:                 string;
}
