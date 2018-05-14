import { Component, OnInit } from '@angular/core';
import { DataAndFlagsService } from '../../notice/Services/data-and-flags.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isBtnShown = false;
  isListView = true;
  isBtnShowMenuClicked = false;

  constructor(private dataAndFlagsService: DataAndFlagsService) { }

  ngOnInit() {
  }

  onBtnMenuClick() {
    this.isBtnShowMenuClicked = !this.isBtnShowMenuClicked;
    this.dataAndFlagsService.setBtnShowMenu(this.isBtnShowMenuClicked);
  }

  showBtnClose() {
    this.isBtnShown = true;
  }

  hideBtnClose() {
    this.isBtnShown = false;
  }

  onChangeBtnView() {
    this.isListView = !this.isListView;
    this.dataAndFlagsService.setListView(this.isListView);
  }

}
