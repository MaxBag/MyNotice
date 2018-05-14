import { Component, OnInit, Output, EventEmitter, Input, ElementRef, Renderer2 } from '@angular/core';
import { DataAndFlagsService } from '../Services/data-and-flags.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

const pallete = [
  '#fff',
  '#ff8a80',
  '#ffd180',
  '#ffff8d',
  '#ccff90',
  '#a7ffeb',
  '#80d8ff',
  '#82b1ff',
  '#b388ff',
  '#f8bbd0',
  '#d7ccc8',
  '#cfd8dc'
];

@Component({
  selector: 'app-color-pallete',
  templateUrl: './color-pallete.component.html',
  styleUrls: ['./color-pallete.component.css'],
  animations: [
    trigger('showPalleteAnimation', [
      transition('inactive <=> active', [
        animate(250, keyframes([
          style({opacity: 0, transform: 'scale(0)', offset: 0}),
          style({opacity: 1, transform: 'scale(1.3)', offset: 0.3}),
          style({opacity: 1, transform: 'scale(1)', offset: 0.6}),
          style({opacity: 1, transform: 'scale(1.1)', offset: 0.8}),
          style({opacity: 1, transform: 'scale(1)', offset: 1})
        ]))
      ]),
    ])
  ]
})
export class ColorPalleteComponent {
  colors = pallete;
  currentColor: string;
  @Input() isShownPallete: boolean;
  @Input() posForPallete: string;
  @Input() palleteState: string;
  @Output() changedCurrentColor = new EventEmitter<object>();

  constructor(private element: ElementRef, private rendere: Renderer2, private dataAndFlagService: DataAndFlagsService) {}

  onChangeCurrentColor(event) {
    this.currentColor = event.target.style.backgroundColor;
    this.isShownPallete = false;
    const obj = {currentColor: this.currentColor, isShownPallete: this.isShownPallete};
    this.changedCurrentColor.emit(obj);
  }

}
