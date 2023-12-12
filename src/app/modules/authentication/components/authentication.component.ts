import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TelcelErrorStateMatcher } from '@sicatel/configs/error-state-matcher';
import { ValidatorsCustomService } from '@sicatel/core/services/utils/validators-custom.service';
import { ELoginType } from '@sicatel/shared/enums/login-type.enum';
import { IUserRequest } from '@sicatel/shared/models/request/user.interface';

@Component({
  selector: 'sicatel-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent  {


  @Output() loginEvent = new EventEmitter<IUserRequest>();

  loading?: boolean = false;
  matcher: TelcelErrorStateMatcher = new TelcelErrorStateMatcher();
  showPassword = false;
  showPasswordCaps = false;
  eLoginType = ELoginType;
  typesLogin: Array<ELoginType> = [ELoginType.CAC, ELoginType.DAT];
  selectedType: ELoginType = ELoginType.CAC;
  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    password: new FormControl('', Validators.required),
    position: new FormControl('', [Validators.maxLength(4), ValidatorsCustomService.conditionalRequired('type', ELoginType.CAC)]),
    type: new FormControl(ELoginType.CAC, Validators.required),
    phone: new FormControl('', [Validators.maxLength(12), ValidatorsCustomService.conditionalRequired('type', ELoginType.DAT)])
  });

  constructor() {
  }

  /**
   * Control change type login
   *
   * @summary Make change type user CAC, DAT
   * @returns void
   */
  changeType(): void {
    this.selectedType = this.loginForm.controls.type.value || this.eLoginType.CAC;
    this.loginForm.controls.phone.updateValueAndValidity();
    this.loginForm.controls.position.updateValueAndValidity();
  }

  /**
   * LogIn
   *
   * @summary: Login into the application
   * @returns void
   */
  onSubmit(): void {
    if (this.loginForm.valid) {
      const userRequest =  {
        userName : this.loginForm.controls.userName.value,
        type: this.loginForm.controls.type.value,
        phone: Number(this.loginForm.controls.phone.value),
        position: this.loginForm.controls.position.value,
        userArrayKey: this.loginForm.controls.password.value
      } as IUserRequest;
      this.loginEvent.emit(userRequest);
    }
  }
}
