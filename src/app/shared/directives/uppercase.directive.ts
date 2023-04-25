import { Directive, ElementRef,  HostListener, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[sicatelUppercase]'
})
export class UppercaseDirective {
  lastValue = '';
  constructor(public ref: ElementRef, public sanitizer: DomSanitizer){}

  @HostListener('input',['$event']) onInput($event: any)
  {
    const start =  $event.target.selectionStart;
    const end =  $event.target.selectionEnd;
    $event.target.value = this.sanitizer.sanitize(SecurityContext.NONE, $event.target.value.toUpperCase());
    $event.target.setSelectionRange(start,end);
    $event.preventDefault();

    if (!this.lastValue || (this.lastValue && $event.target.value.length > 0 && this.lastValue !== $event.target.value)) {
      this.lastValue = this.ref.nativeElement.value =  this.sanitizer.sanitize(SecurityContext.NONE,$event.target.value) || '';
      $event.stopPropagation();
    }
  }
}
