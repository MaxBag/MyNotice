import { Directive, HostListener, ElementRef } from '@angular/core';
import { DataAndFlagsService } from '../Services/data-and-flags.service';

@Directive({
  selector: '[appSetCoord]'
})
export class SetCoordDirective {

  constructor(private dataAndFlagService: DataAndFlagsService, private elem: ElementRef) { }

  @HostListener('click') onClickBtn() {
    const targetStyleHeight = this.elem.nativeElement.offsetHeight + 'px';
    this.dataAndFlagService.setCoordsBtn(targetStyleHeight);
  }

}

