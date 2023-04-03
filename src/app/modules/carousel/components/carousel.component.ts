import { Component, Input, OnInit } from '@angular/core';
import { Slider } from '@sicatel/shared/models/slider/slider.interface';

@Component({
  selector: 'sicatel-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {


  @Input('bgDefault') bgDefault: boolean = true;
  @Input('height') height: number = 200;
  @Input('dark') dark: boolean = false;
  @Input('sliderData') sliderData: Slider[] = [];
  
  imgDefault: string = '/img/background-slider.png';
  

  constructor() { 
  }

  ngOnInit(): void {
   
  }
  
}
