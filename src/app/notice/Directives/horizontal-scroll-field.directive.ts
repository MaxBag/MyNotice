import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHorizontalScrollField]'
})
export class HorizontalScrollFieldDirective {

  constructor(private el: ElementRef) { }

  @HostListener('keydown') resizeField() {
    this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
  }
}
