import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SicatelUrlsConstants } from '@sicatel/configs/urls.constants';
import { Observable, map } from 'rxjs';

import { ISlider } from '../../../shared/models/slider/slider.interface';


@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(private http: HttpClient) { }

  /** Load data for carousel
   *
   * @summary Make call ms load data for carousel
   * @returns ISlider[]
   */
  loadData(): Observable<Array<ISlider>>{
    return this.http.get<Array<ISlider>>(SicatelUrlsConstants.dataSliderUrl).pipe(map(data => data as Array<ISlider>));;
  }

}
