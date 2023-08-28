import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ELoginType } from '@sicatel/shared/enums/login-type.enum';
import { IUser } from '@sicatel/shared/models/user/user';

@Component({
    selector: 'sicatel-profile-menu-component',
    templateUrl: './profile-menu.component.html',
    styleUrls: ['./profile-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class SicatelProfileMenuComponent {

    @Input() user!: IUser;
    @Output() signOffEvent = new EventEmitter();

    date = new Date();
    eLoginType = ELoginType;

    constructor() { }

}
