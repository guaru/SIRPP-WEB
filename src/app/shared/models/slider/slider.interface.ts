import { ISliderBody } from '@sicatel/shared/models/slider/slider-body.interface';
import { ISliderLink } from '@sicatel/shared/models/slider/slider-link.interface';

export interface ISlider {
    subtitle: string;
    title: string;
    image: string;
    body: ISliderBody;
    link: ISliderLink;
}

