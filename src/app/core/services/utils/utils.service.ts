import { Injectable } from "@angular/core";
import { IError } from "@sicatel/shared/models/request/error.interface";
import { ToastrService } from "ngx-toastr";

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    constructor(private messageService: ToastrService) {}

    /**
     * Show Error Message
     *
     * @summary Show error message
     * @param error : IError
     * @returns void
     */
    showErrorMessage(error: IError): void {
        this.messageService.error(error.message, error.title);
    }
}