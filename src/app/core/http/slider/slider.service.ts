import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Slider } from '../../../shared/models/slider/slider.interface';
import { SicatelUrlsConstants } from '@sicatel/configs/urls.constants';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(private http:HttpClient) { }

  loadData(): Observable<Array<Slider>>{
    return this.http.get<Array<Slider>>(SicatelUrlsConstants.dataSliderUrl);
  }
  
}
