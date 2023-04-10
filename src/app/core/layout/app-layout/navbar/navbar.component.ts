import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUser } from '@sicatel/shared/models/user/User';
import { ELoginType } from '@sicatel/shared/enums/login-type.enum';
import { signOff } from '@sicatel/modules/authentication/store/actions/authentication.actions';


@Component({
  selector: 'sicatel-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

   @Input('user') user: IUser = {} as IUser;
   @Output() signOffEvent =  new EventEmitter();
   date = new Date();
   ELoginType = ELoginType;
   constructor(){
   
   }

   onClicksignOff(){
      this.signOffEvent.emit();
   }
}
