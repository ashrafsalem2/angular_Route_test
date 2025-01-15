  import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavScroll]'
})

export class NavScrollDirective {

  constructor() { }

  @HostListener('window:scroll', ['$event.target']) onScroll(target: HTMLInputElement) {
    let nav = target?.querySelector('nav')
    if (window.scrollY > 100) {
      nav?.setAttribute('style', 'height:10%')
      console.log('hhhhhhhhhhhhhhh', nav)
      
    } else {
      nav?.setAttribute('style', 'height:15%')
      console.log('sdsdsd')
    }
  }

  @HostListener('focus', ['$event.target'])
  onFocus(target: HTMLInputElement) {
    console.log(target);
    target?.nextElementSibling?.classList.add('focused');
  }

}
