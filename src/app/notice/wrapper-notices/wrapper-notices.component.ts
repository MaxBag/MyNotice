import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper-notices',
  templateUrl: './wrapper-notices.component.html',
  styleUrls: ['./wrapper-notices.component.css']
})
export class WrapperNoticesComponent implements OnInit {
  isAddedNotice = false;
  constructor() { }

  ngOnInit() {
  }

  renderAllNotices(data: boolean) {
    this.isAddedNotice = data;
  }

  reRenderAllNotices(data: boolean) {
    this.isAddedNotice = data;
  }

}
