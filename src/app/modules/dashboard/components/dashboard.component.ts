import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IDashboardSettings } from '@sicatel/modules/dashboard/models/dashboard-settings.interface';
import { ERole } from '@sicatel/shared/enums/roles.emun';

@Component({
  selector: 'sicatel-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() message?: string;
  @Input() userSettings?: IDashboardSettings;
  @Output() changeCustomerDataEvent = new EventEmitter();

  ngOnInit(): void {
  }

  /**
   * Change Customer Data
   *
   * @summary: Change customer data
   * @returns: void
   */
  changeCustomerData(): void {    
    this.changeCustomerDataEvent.emit();
  }
}
