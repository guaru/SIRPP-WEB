import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { IError } from '@sicatel/shared/models/request/error.interface';
import { ELoginType } from '../../../shared/enums/login-type.enum';
import { TelcelErrorStateMatcher } from '@sicatel/configs/error-state-matcher';
import { ValidatorsCustomService } from '../../../core/services/utils/validators-custom.service';
import { UtilsService } from '../../../core/services/utils/utils.service';
import { IUserRequest } from '@sicatel/shared/models/request/user.interface';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';


import * as AuthenticationActions from '@sicatel/modules/authentication/store/actions/authentication.actions';
import * as fromAuthentication from '@sicatel/modules/authentication/store/reducers/authentication.reducers';
import * as AuthenticationSelectors from '@sicatel/modules/authentication/store/selectors/authentication.selectors';
import { Router } from '@angular/router';




@Component({
  selector: 'sicatel-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit, OnDestroy  {

  loading?: boolean = false;
  matcher: TelcelErrorStateMatcher = new TelcelErrorStateMatcher();
  showPassword = false;
  showPasswordCaps = false;
  ELoginType = ELoginType;
  typesLogin: Array<ELoginType> = [ELoginType.CAC, ELoginType.DAT];
  selectedType: ELoginType = ELoginType.CAC;
  storeSubscribe : Subscription;

  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    password: new FormControl('', Validators.required),
    position: new FormControl('', [Validators.maxLength(4), ValidatorsCustomService.conditionalRequired('type', ELoginType.CAC)]),
    type: new FormControl(ELoginType.CAC, Validators.required),
    phone: new FormControl('', [Validators.maxLength(12), ValidatorsCustomService.conditionalRequired('type', ELoginType.DAT)])
  });


  constructor(private store: Store<fromAuthentication.State>) {
    this.storeSubscribe =  this.store.select(AuthenticationSelectors.selectAuthenticationStateLoading).subscribe( (loading)  => {
      this.loading = loading;
    });
  }


  ngOnDestroy(): void {
    this.storeSubscribe.unsubscribe();
  }

  ngOnInit(): void {
   
  }


  /**
   * Control change type login
   */
  changeType() {
    this.selectedType = this.type.value;
    this.phone.updateValueAndValidity();
    this.position.updateValueAndValidity();
  }

  
  /**
   * LogIn
   *
   * @summary: Login into the application
   * @param $userInput: HTMLInputElement
   * @returns void
   */
  onSubmit() {
    if (this.loginForm.valid) {
      let userRequest =  {
        userName : this.userName.value,
        type: this.type.value,
        phone: this.phone.value,
        position: this.position.value,
        userArrayKey: this.password.value
      } as IUserRequest;

      this.store.dispatch(AuthenticationActions.signIn({userRequest}));
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
