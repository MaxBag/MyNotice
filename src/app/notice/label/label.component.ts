import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {
  @Input() posForLabel: string;
  @Input() isShownLabel: string;

  constructor() { }

  ngOnInit() {
  }

}
