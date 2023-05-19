import { Component, Input } from '@angular/core';
import { ISlider } from '@sicatel/shared/models/slider/slider.interface';

@Component({
  selector: 'sicatel-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  @Input() bgDefault = true;
  @Input() height = 200;
  @Input() dark = false;
  @Input() sliderData: Array<ISlider> = [];
  imgDefault = '/img/background-slider.png';

  constructor() {}
}
