import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class DataAndFlagsService {
  coordsBtn: string;
  isListView = true;
  isBtnShowMenuClicked = false;

  constructor() { }

  setBtnShowMenu(condition: boolean) {
    this.isBtnShowMenuClicked = condition;
  }

  getBtnShowMenuClicked(): Observable<boolean> {
    return of(this.isBtnShowMenuClicked);
  }

  setCoordsBtn(coord: string) {
    this.coordsBtn = coord;
  }

  setListView(isListView: boolean) {
    this.isListView = isListView;
  }

  getListViewVal(): Observable<boolean> {
    return of(this.isListView);
  }


}
