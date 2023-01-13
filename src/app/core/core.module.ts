import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [],
    imports: [
        MatNativeDateModule,
        RouterModule
    ],
    providers: []
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if(parentModule) {
            throw new Error(`${ parentModule } has already been loaded. Import Core module in CoreModule only`);
        }
    }
}
