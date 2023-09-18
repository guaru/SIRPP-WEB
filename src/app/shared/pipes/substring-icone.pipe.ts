import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'substringIcon'
})
export class SubstringIconPipe implements PipeTransform {
    transform(value: string, args?: any): string {
        return value.substring(3, value.length);
    }
}
