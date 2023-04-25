import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ELoginType } from '@sicatel/shared/enums/login-type.enum';
import { IUser } from '@sicatel/shared/models/user/user';

@Component({
  selector: 'sicatel-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
   @Input() user: IUser = {} as IUser;
   @Output() signOffEvent =  new EventEmitter();
   date = new Date();
   eLoginType = ELoginType;

   constructor(){}

   /**
    * Close sesión user
    *
    * @summary Make event close session
    * @returns void
    */
   onClickSignOff(): void{
      this.signOffEvent.emit();
   }
}
