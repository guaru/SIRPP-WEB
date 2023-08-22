import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SicatelMaskComponent } from '@sicatel/modules/mask/mask.component';

@NgModule({
    declarations: [ SicatelMaskComponent ],
    imports: [ CommonModule ],
    exports: [ SicatelMaskComponent ]
})
export class SicatelMaskModule {}
