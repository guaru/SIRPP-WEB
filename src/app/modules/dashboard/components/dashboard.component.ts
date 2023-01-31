import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IDashboardSettings } from '@sicatel/modules/dashboard/models/dashboard-settings.interface';

@Component({
  selector: 'sicatel-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @Input() message?: string;
  @Input() userSettings?: IDashboardSettings;
  @Output() changeCustomerDataEvent = new EventEmitter();

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
