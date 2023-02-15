import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
    selector: '[sicatelCapsLock]'
})
export class CapsLockDirective {
    @Output() capsLock = new EventEmitter<boolean>();

    constructor() {}

    @HostListener('window:keydown', ['$event'])
    keyDown(event: KeyboardEvent): void {
        this.capsLock.emit(event.getModifierState && event.getModifierState('CapsLock'));
    }

    @HostListener('window.keyUp', ['$event'])
    keyUp(event: KeyboardEvent): void {
        this.capsLock.emit(event.getModifierState && event.getModifierState('CapsLock'));
    }
}
