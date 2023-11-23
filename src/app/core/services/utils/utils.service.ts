import { Injectable } from '@angular/core';
import { environment } from '@sicatel/env/environment';
import { IMessage } from '@sicatel/shared/models/message.interface';
import { IError } from '@sicatel/shared/models/request/error.interface';
import *  as CryptoJS from 'crypto-js';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    loading = false;

    constructor() { }

    /**
     * Show Error Message
     *
     * @summary Show message type error
     * @param error : IError
     * @returns void
     */
    showErrorMessage(error: IError): void {
        Swal.fire({
            title: error.title,
            text: error.message,
            icon: 'error',
            confirmButtonColor: '#f39c12',
            confirmButtonText: 'Enterado',
            footer: `Código ${error.code}`,
            focusConfirm: true
        });
    }

    /**
     * Show success message
     *
     * @summary Show message type success
     * @param msg
     */
    showSuccessMessage(msg: string = 'Listo'): void {
        Swal.fire({
            title: 'Exito',
            text: msg,
            icon: 'success',
            confirmButtonColor: '#0071d1',
            confirmButtonText: 'Enterado',
            focusConfirm: true
        });
    }


    /**
     * Show info message
     *
     * @summary Show message type info
     * @param msg
     */
    showInfoMessage(msg: IMessage): void {
        Swal.fire({
            title: msg.title,
            text: msg.message,
            icon: 'info',
            confirmButtonColor: '#0071d1',
            confirmButtonText: 'Enterado',
            focusConfirm: true
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
        return CryptoJS.AES.decrypt(valueEncrypt, environment.key).toString(CryptoJS.enc.Utf8);
    }


    /**
     * Validate string empty or undefined
     *
     * @summary Validate string is empty (trim), or undefined
     * @param string
     * @returns boolean
     */
    isEmpty(value: string | undefined): boolean {
        return !value || value === undefined || value.trim() === '';
    }

    /**
     * Copy properties not empty from source to target
     *
     * @summary Copy properties not empty
     * @param source
     * @param target
     */
    copyIsNotEmptyProperties(source: any, target: any): any {
        Object.keys(source).forEach((key) => {
            if (!this.isEmpty(source[key])) {
                target[key] = source[key];
            }
        });
    }

}
