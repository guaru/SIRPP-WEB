import { NgModule } from '@angular/core';
import { CapsLockDirective } from '@sicatel/shared/directives/caps-lock.directive';
import { UppercaseDirective } from '@sicatel/shared/directives/uppercase.directive';

@NgModule({
    declarations: [ CapsLockDirective,UppercaseDirective ],
    exports: [ CapsLockDirective,UppercaseDirective ]
})
export class DirectivesModule {}
