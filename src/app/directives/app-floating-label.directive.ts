import {  Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppFloatingLabel]'
})
export class AppFloatingLabelDirective {

  // constructor(private el: ElementRef) {
  //   this.el.nativeElement.classList.add('input-container');
  // }

  // @HostListener('focus', ['$event.target'])
  // onFocus(target: HTMLInputElement) {
  //   console.log(target);
  //   target?.nextElementSibling?.classList.add('focused');
  // }

  // @HostListener('blur', ['$event.target'])
  // onBlur(target: HTMLInputElement) {
  //   console.log(target);
  //   if (!target.value) {
  //     console.log(target.value);
  //     target?.nextElementSibling?.classList.remove('focused');
  //   }
  // }

}
