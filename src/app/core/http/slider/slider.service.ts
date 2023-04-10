import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ISlider } from '../../../shared/models/slider/slider.interface';
import { SicatelUrlsConstants } from '@sicatel/configs/urls.constants';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(private http:HttpClient) { }

  loadData(): Observable<Array<ISlider>>{
    return this.http.get<Array<ISlider>>(SicatelUrlsConstants.dataSliderUrl);
  }
  
}
