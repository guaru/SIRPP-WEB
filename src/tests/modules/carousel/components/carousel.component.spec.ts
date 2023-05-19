import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CarouselComponent } from '@sicatel/modules/carousel/components/carousel.component';
import { CarouselTestConstants } from '@sicatel/tests/configs/carousel-test.constants';
import { MockModule } from 'ng-mocks';

describe('CarouselComponente', ()=>{
    let component:  CarouselComponent;
    let fixture: ComponentFixture<CarouselComponent>;

    beforeEach(waitForAsync(() => {

        TestBed.configureTestingModule({
            declarations: [CarouselComponent],
            imports: [MockModule(CommonModule)]

        }).compileComponents();
    }));

    beforeEach(() =>{
        fixture =  TestBed.createComponent(CarouselComponent);
        component = fixture.componentInstance;
        component.bgDefault = true;
        component.dark = false;
        component.height = 200;
        component.sliderData =  CarouselTestConstants.sliderData;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
