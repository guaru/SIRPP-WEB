import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LoginLayoutComponent } from '@sicatel/core/layout/login-layout/login.layout';

@NgModule({
    declarations: [ LoginLayoutComponent ],
    imports: [
        BrowserModule,
        RouterModule
    ],
    exports: [ LoginLayoutComponent ]
})
export class LoginLayoutModule {}
