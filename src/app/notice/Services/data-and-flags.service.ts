import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpService } from './http.service';

@Injectable()
export class DataAndFlagsService {
  coordsBtn: string;
  // searchableText: string;
  isListView = true;
  isBtnShowMenuClicked = false;
  isAddedNewNotice = false;
  isBtnSearchClicked = false;

  constructor(private http: HttpService) { }

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

  addedNewNotice(): Observable<boolean> {
    return of(this.isAddedNewNotice);
  }

  setBtnSearchClicked(condition: boolean) {
    this.isBtnSearchClicked = condition;
  }

  // setSearchableText(text: string): void {
  //   this.searchableText = text;
  // }

  getBtnSearchClicked(): Observable<boolean> {
    return of(this.isBtnSearchClicked);
  }

  getAllNotes(): Observable<any> {
    return this.http.getAllNotices();
  }

}
