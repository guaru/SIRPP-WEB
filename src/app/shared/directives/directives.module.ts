import { NgModule } from '@angular/core';
import { CapsLockDirective } from '@sicatel/shared/directives/caps-lock.directive';
import { UppercaseDirective } from '@sicatel/shared/directives/uppercase.directive';

import { NumberDirective } from './number.directive';

@NgModule({
    declarations: [ CapsLockDirective, UppercaseDirective, NumberDirective ],
    exports: [ CapsLockDirective, UppercaseDirective, NumberDirective ]
})
export class DirectivesModule {}
