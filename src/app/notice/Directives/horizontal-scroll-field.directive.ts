import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHorizontalScrollField]'
})
export class HorizontalScrollFieldDirective {
  constructor(private el: ElementRef) { }

  @HostListener('input') resizeField() {
    if (this.el.nativeElement.value === '') {
      this.el.nativeElement.style.height = '';
      // this.defaultHeight = false;
    } else {
      this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
    }
  }
}
