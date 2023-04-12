import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidatorsCustomService {

  constructor() { }

  public static conditionalRequired(fieldName: string, value: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.parent)
        return null;
        
      if (control.parent.get(fieldName)!.value === value) {
        return Validators.required(control);
      }
      return null;
    }
  }

}
