import { ISliderBody } from '@sicatel/shared/models/slider/slider-body.interface';
import { ISliderConfig } from '@sicatel/shared/models/slider/slider-config.interface';
import { ISliderLink } from '@sicatel/shared/models/slider/slider-link.interface';
import { ISlider } from '@sicatel/shared/models/slider/slider.interface';

export class CarouselTestConstants {

    static readonly sliderData: Array<ISlider> =  [ {
                title : 'DATA 1',
                subtitle: 'Subtitle 1',
                image : '',
                link : {
                    texto: 'Ruta',
                    ruta: 'http://test.com'
                } as ISliderLink,
                body:  {
                    componentGui : '',
                    mail: 'test@yopmail.com',
                    phone: '559959955',
                    text1: 'Test texto 1' ,
                    text2: 'Test texto 2'
                } as ISliderBody

    } as ISlider, {
        title : 'DATA 1',
        subtitle: 'Subtitle 1',
        image : '',
        link : {
            texto: 'Ruta',
            ruta: 'http://test.com'
        } as ISliderLink,
        body:  {
            componentGui : '',
            mail: 'test@yopmail.com',
            phone: '559959955',
            text1: 'Test texto 1' ,
            text2: 'Test texto 2'
        } as ISliderBody

} as ISlider];


    static readonly config: ISliderConfig = {
        height: 200,
        dark: false,
        bgDefault: true
    } as ISliderConfig;
}
