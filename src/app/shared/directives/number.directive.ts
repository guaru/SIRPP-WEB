import { Directive, ElementRef, HostListener, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[sicatelNumber]'
})
export class NumberDirective {
  lastValue = '';
  constructor(public ref: ElementRef, private sanitizer: DomSanitizer){}

  @HostListener('input',['$event']) onInput($event: any)
  {
    const initalValue = this.ref.nativeElement.value;
    this.ref.nativeElement.value = this.sanitizer.sanitize(SecurityContext.NONE,initalValue.replace(/[^0-9]*/g, ''));
    if ( initalValue !== this.ref.nativeElement.value) {
      $event.stopPropagation();
    }
  }
}
