import { SliderBody } from './slider-body.interface';
import { SliderLink } from './slider-link.interface';

export interface Slider {
    subtitle: string;
    title: string;
    image: string;
    body: SliderBody;
    link: SliderLink;
}

