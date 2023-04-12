import { Injectable } from '@angular/core';
import { IError } from '@sicatel/shared/models/request/error.interface';
import Swal  from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    constructor() {}

    /**
     * Show Error Message
     * @summary Show error message
     * @param error : IError
     * @returns void
     */
    showErrorMessage(error: IError): void {
        Swal.fire({
            title: error.title,
            text : error.message,
            icon: 'error',
            confirmButtonColor: '#f39c12',
            confirmButtonText: 'Enterado',
            footer: `Código ${error.code}`
        });
    }


     /**
     * Show Error Message
     * @summary Show error message
     * @param error : IError
     * @returns void
     */
     showSuccessMessage(msg: string = 'Listo'): void {
            Swal.fire({
                title: 'Exito',
                text : msg,
                icon: 'success',
                confirmButtonColor: '#0071d1',
                confirmButtonText: 'Enterado'
            });
    }




}
