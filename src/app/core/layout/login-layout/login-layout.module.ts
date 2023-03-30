import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LoginLayoutComponent } from '@sicatel/core/layout/login-layout/login.layout';
import { CarouselModule } from '../../../modules/carousel/carousel.module';

@NgModule({
    declarations: [ LoginLayoutComponent ],
    imports: [
        BrowserModule,
        RouterModule,
        CarouselModule
    ],
    exports: [ LoginLayoutComponent ]
})
export class LoginLayoutModule {}
