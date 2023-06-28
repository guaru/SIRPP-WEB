import { Component, Input } from '@angular/core';
import { Menu } from '@sicatel/shared/models/menu/menu.interface';

@Component({
  selector: 'sicatel-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Input() menu: Array<Menu> =  [];

  constructor(){}
}
