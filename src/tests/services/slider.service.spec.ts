import { HttpClient } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { SliderService } from '@sicatel/core/http/slider/slider.service';
import { ISlider } from '@sicatel/shared/models/slider/slider.interface';
import { CarouselTestConstants } from '@sicatel/tests/configs/carousel-test.constants';
import { of } from 'rxjs';

describe('SliderService', () =>{

    const spy = {
        get: jest.fn()
    };

    let service: SliderService;

    beforeEach(waitForAsync(() =>{

        TestBed.configureTestingModule({
            providers : [
                {
                    provide: HttpClient,
                    useValue: spy
                }
            ]
        });

        service =  TestBed.inject(SliderService);
    }));

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should be created', () =>{
        expect(service).toBeTruthy();
    });

    it('should load data slider', () =>{
        spy.get.mockReturnValue(of(CarouselTestConstants.sliderData));
        service.loadData().subscribe( (data: Array<ISlider>) =>{
            expect(spy.get.mock.calls.length).toBe(1);
            expect(data).toBe(CarouselTestConstants.sliderData);
        });
    });
});
