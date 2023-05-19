import { NgModule } from '@angular/core';
import { CapsLockDirective } from '@sicatel/shared/directives/caps-lock.directive';
import { NumberDirective } from '@sicatel/shared/directives/number.directive';
import { UppercaseDirective } from '@sicatel/shared/directives/uppercase.directive';


@NgModule({
    declarations: [ CapsLockDirective, UppercaseDirective, NumberDirective ],
    exports: [ CapsLockDirective, UppercaseDirective, NumberDirective ]
})
export class DirectivesModule {}
