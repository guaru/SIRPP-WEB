import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sicatel-mask',
  templateUrl: './mask.component.html',
  styleUrls: ['./mask.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeIn', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300)
      ]),
      transition(':leave',
        animate(200, style({ opacity: 0 })))
    ])
  ]
})
export class SicatelMaskComponent implements OnChanges {

  @Input() fullScreen?: boolean;
  @Input() image? = 'assets/icons/logo_Telcel.png';
  @Input() alt? = 'Telcel logo';

  ngOnChanges(changes: SimpleChanges): void {
    this.fullScreen = changes['fullScreen'].currentValue;
  }

}
