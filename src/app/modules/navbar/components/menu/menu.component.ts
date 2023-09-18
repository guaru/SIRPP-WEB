import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Menu } from '@sicatel/shared/models/menu/menu.interface';

@Component({
  selector: 'sicatel-menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SicatelMenuComponent implements OnChanges {

  @ViewChild('sidenav') sideNaveMenu!: MatSidenav;

  @Input() menu!: Array<Menu>;
  @Input() toggleMenu!: boolean;
  @Input() loading!: boolean;
  @Input() toolbar!: boolean;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['toggleMenu'] && this.sideNaveMenu) {
      this.sideNaveMenu!.toggle();
    }
  }

}
