import { NgModule } from '@angular/core';
import { SubstringIconPipe } from '@sicatel/shared/pipes/substring-icone.pipe';

@NgModule({
    declarations: [
        SubstringIconPipe
    ],
    exports: [
        SubstringIconPipe
    ]
})
export class PipesModule {}
