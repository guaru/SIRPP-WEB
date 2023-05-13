import { Injectable } from '@angular/core';
import { environment } from '@sicatel/env/environment';
import { IError } from '@sicatel/shared/models/request/error.interface';
import  *  as CryptoJS from  'crypto-js';
import Swal  from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    constructor() {}

    /**
     * Show Error Message
     *
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
      *
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

    /**
     * encrypt
     *
     * @summary encrypt with cryptojs
     * @param value
     * @returns  string
     */
    encrypt(value: string): string {
      return CryptoJS.AES.encrypt(value, environment.key).toString();
    }

    /**
     * decrypt
     *
     * @summary decrypt with  cryptojs
     * @param valueEncrypt
     * @returns string
     */
    decrypt(valueEncrypt: string): string {
      return  CryptoJS.AES.decrypt(valueEncrypt, environment.key).toString(CryptoJS.enc.Utf8);
    }
}
