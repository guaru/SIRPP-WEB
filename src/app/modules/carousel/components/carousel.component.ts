import { Component, Input, OnInit } from '@angular/core';
import { SliderService } from '../../../core/http/slider/slider.service';
import { Observable } from 'rxjs';
import { Slider } from '../../../shared/models/slider/slider.interface';

@Component({
  selector: 'sicatel-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input('bgDefault') bgDefault: boolean = true;
  @Input('height') height: number = 200;
  @Input('dark') dark: boolean = false;

  imgDefault: string = '/img/background-slider.png';
  sliderData$: Observable<Array<Slider>> ;

  constructor(private sliderService: SliderService) { 
      this.sliderData$ =  new  Observable<Array<Slider>>();
      
  }

  ngOnInit(): void {
    this.loadData();
  }


  private loadData(){
    this.sliderData$ = this.sliderService.loadData();
  }
  
}
