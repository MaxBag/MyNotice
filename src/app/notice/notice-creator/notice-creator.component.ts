import { Component, OnInit, Input } from '@angular/core';
import { DataAndFlagsService } from '../Services/data-and-flags.service';

const titleText = 'Enter a title';
const noticeText = 'Notice...';

@Component({
  selector: 'app-notice-creator',
  templateUrl: './notice-creator.component.html',
  styleUrls: ['./notice-creator.component.css']
})
export class NoticeCreatorComponent implements OnInit {

  currentColor: string;
  posForPallete: string;
  posForLabel: string;
  isShownPallete = false;
  isShownLabel = false;
  isErrorText = false;
  palleteState = 'inactive';
  title = titleText;
  notice = noticeText;

  constructor(public dataAndFlagService: DataAndFlagsService) { }

  ngOnInit() {
  }

  setTitle(title: string) {
    this.title = title;
  }

  setNotice(notice: string) {
    this.notice = notice;
  }

  onFocusField(fieldName: string, value: string) {
    if (fieldName === 'title') {
      this.isErrorText = false;
      if (value === titleText) {
        this.title = '';
      }

    } else if (fieldName === 'notice') {
      this.isErrorText = false;
      if (value === noticeText) {
        this.notice = '';
      }
    }
  }

  onBlurField(fieldName: string, value: string) {
    if (fieldName === 'title') {
      if (value === '') {
        this.title = titleText;
      }

    } else if (fieldName === 'notice') {
      if (value === '') {
        this.notice = noticeText;
      }
    }
  }

  showPallete() {
    this.isShownPallete = !this.isShownPallete;
    this.posForPallete = this.dataAndFlagService.coordsBtn;
    this.palleteState = this.isShownPallete ? 'active' : 'inactive';
    this.isShownLabel = false;
  }

  setColor(obj: any) {
    this.currentColor = obj.currentColor;
    this.isShownPallete = obj.isShownPallete;
    this.palleteState = 'inactive';
  }

  showLabels() {
    this.isShownLabel = !this.isShownLabel;
    this.posForLabel = this.dataAndFlagService.coordsBtn;
    this.isShownPallete = false;
    this.palleteState = 'inactive';
  }

  onClickBtnReset() {
    this.title = titleText;
    this.notice = noticeText;
    this.currentColor = '';
    this.isErrorText = false;
    this.isShownPallete = false;
  }

  onClickBtnSave(event: MouseEvent) {
    if (this.title === titleText || this.title === ''
      || this.notice === noticeText || this.notice === '') {
        event.preventDefault();
        this.isErrorText = true;
    }
  }

}
