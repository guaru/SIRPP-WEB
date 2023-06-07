export interface Menu{
    name:     string;
    icon:     string;
    url:      string;
    idTarea:  string;
    permisos: string;
    items:    Array<Menu>;
}
