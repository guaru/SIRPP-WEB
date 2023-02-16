import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IError } from '@sicatel/shared/models/request/error.interface';

@Component({
  selector: 'sicatel-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {
  error?: IError;
  loading?: boolean = false;

  showPassword = false;
  showPasswordCaps= false;

  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    password: new FormControl('', Validators.required)
  });

  constructor(private router: Router) {}

  /**
   * LogIn
   *
   * summary: Login into the application
   * @param $userInput: HTMLInputElement
   * @returns void
   */
  logIn($userInput: HTMLInputElement): void {
    this.router.navigate([ 'home/dashboard' ], { queryParams: { name: $userInput.value } });
  }
}
