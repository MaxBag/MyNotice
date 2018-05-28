import { Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appHorizontalScrollField]'
})
export class HorizontalScrollFieldDirective {
  constructor(private el: ElementRef) { }

  @HostListener('input') resizeOnInput() {
    this.resizeField();
  }

  @HostListener('focus') resizeOnFocus() {
    this.resizeField();
  }

  resizeField() {
    if (this.el.nativeElement.value === '') {
      this.el.nativeElement.style.height = '';
    } else {
      this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
    }
  }
}
