import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ELoginType } from '@sicatel/shared/enums/login-type.enum';
import { Menu } from '@sicatel/shared/models/menu/menu.interface';
import { IUser } from '@sicatel/shared/models/user/user';

@Component({
  selector: 'sicatel-navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class SicatelNavbarComponent {

  @Input() user!: IUser;
  @Input() menu!: Array<Menu>;
  @Input() loading!: boolean;
  @Output() signOffEvent = new EventEmitter();

  date = new Date();
  eLoginType = ELoginType;
  toggleMenu = false;

  constructor() { }

  /**
   * Close sesión user
   *
   * @summary Make event close session
   * @returns void
   */
  onClickSignOff(): void {
    this.signOffEvent.emit();
  }
}
