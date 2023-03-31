import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IError } from '@sicatel/shared/models/request/error.interface';
import { ELoginType } from '../../../shared/enums/login-type.enum';
import { TelcelErrorStateMatcher } from '@sicatel/configs/error-state-matcher';
import { ValidatorsCustomService } from '../../../core/services/utils/validators-custom.service';


@Component({
  selector: 'sicatel-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {
  error?: IError;
  loading?: boolean = false;
  matcher: TelcelErrorStateMatcher = new TelcelErrorStateMatcher();
  showPassword = false;
  showPasswordCaps = false;
  ELoginType = ELoginType;
  typesLogin: Array<ELoginType> = [ELoginType.CAC, ELoginType.DAT];
  selectedType: ELoginType = ELoginType.CAC;

  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    password: new FormControl('', Validators.required),
    position: new FormControl('', [Validators.maxLength(4), ValidatorsCustomService.conditionalRequired('type', ELoginType.CAC)]),
    type: new FormControl(ELoginType.CAC, Validators.required),
    phone: new FormControl('', [Validators.maxLength(12), ValidatorsCustomService.conditionalRequired('type', ELoginType.DAT)])
  });


  constructor(private router: Router) {

  }



  /**
   * LogIn
   *
   * @summary: Login into the application
   * @param $userInput: HTMLInputElement
   * @returns void
   */
  logIn($userInput: HTMLInputElement): void {
    this.router.navigate(['home/dashboard'], { queryParams: { name: $userInput.value } });
  }

  /**
   * Control change type login
   */
  changeType() {
    this.selectedType = this.type.value;
    this.phone.updateValueAndValidity();
    this.position.updateValueAndValidity();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log("valido");
    }
  }

  get type(): FormControl {
    return this.loginForm.controls.type;
  }

  get phone(): FormControl {
    return this.loginForm.controls.phone;
  }

  get position(): FormControl {
    return this.loginForm.controls.position;
  }


  get password(): FormControl {
    return  this.loginForm.controls.password;
  }


  get userName(): FormControl {
     return this.loginForm.controls.userName;
  }





}
