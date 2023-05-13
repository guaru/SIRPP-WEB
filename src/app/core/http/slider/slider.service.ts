import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SicatelUrlsConstants } from '@sicatel/configs/urls.constants';
import { ISlider } from '@sicatel/shared/models/slider/slider.interface';
import { Observable, map } from 'rxjs';

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
    return this.http.get<Array<ISlider>>(SicatelUrlsConstants.dataSliderUrl).pipe(map(data => data as Array<ISlider>));
  }

}
