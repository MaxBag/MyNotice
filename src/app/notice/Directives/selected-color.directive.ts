import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSelectedColor]'
})
export class SelectedColorDirective {

  constructor (private elem: ElementRef) { }

  @HostListener('click') onClickCurrent() {
    const target = this.elem.nativeElement;
    const children = target.parentNode.children;

    for (let i = 0; i < children.length; i++) {
      children[i].style.border = '';
    }

    target.style.border = '1px solid blue';
  }

}
