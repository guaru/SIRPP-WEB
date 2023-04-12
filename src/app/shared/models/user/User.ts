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
    fuerzaVenta:              string;
    ip:                       string;
    nivelFuerzaVenta:         string;
    posicion:                 string;
    telefono:                 number;
    claveUsuarioDistribuidor: string;
    tipo:                     string;
    estatus:                  string;
    uuid:                     string;
    region:                   string;
    centro:                   string;
    idRegion:                 number;
    numCaja:                  number;
    oficinaVentas:            string;
    idCentro:                 string;
    permisos:                 string;
}
