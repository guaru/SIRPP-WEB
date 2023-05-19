import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsCustomService {

  constructor() { }

  static conditionalRequired(fieldName: string, value: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
      if (!control.parent)
        {return {};}

      if (control.parent.get(fieldName)!.value === value) {
        return Validators.required(control) || {};
      }
      return {};
    };
  }

}
