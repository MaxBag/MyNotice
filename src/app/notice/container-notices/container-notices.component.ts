import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../Services/http.service';
import { Subscription } from 'rxjs/Subscription';
import { DataAndFlagsService } from '../Services/data-and-flags.service';

@Component({
  selector: 'app-container-notices',
  templateUrl: './container-notices.component.html',
  styleUrls: ['./container-notices.component.css']
})
export class ContainerNoticesComponent implements OnInit, OnDestroy {

  @Input() notes$ = [];
  subscription: Subscription;
  onDestroy = false;

  @Input() set addNewNotice(isAddedNotice: boolean) {
    if (isAddedNotice) {
      this.getAllNotices();
    }
  }

  @Input() emptySearch;

  @Output() addedNewNotice = new EventEmitter<boolean>();

  constructor(private httpService: HttpService, private dataAndFlags: DataAndFlagsService) { }

  ngOnInit() {
    // this.getAllNotices();
  }

  ngOnDestroy() {
    if (this.onDestroy) {
      this.subscription.unsubscribe();
    }
  }

  getAllNotices() {
    // const conditionSearchOn = this.dataAndFlags.isBtnSearchClicked;
    // const searchableTextRegExp = new RegExp(`${this.dataAndFlags.searchableText}`, 'i');
    this.subscription = this.httpService.getAllNotices().subscribe((data) => {
     // data.map(obj => obj.changeTime = this.formatTime(obj.changeTime));

      // if (conditionSearchOn) {
      //   this.notes$ = data.filter(obj => obj.title.search(searchableTextRegExp) > -1);
      //   if (this.notes$.length === 0) {
      //     this.emptySearch = true;
      //   }
      //   this.dataAndFlags.isBtnSearchClicked = false;
      // } else {
      this.notes$ = data.reverse();
    // }
      this.addedNewNotice.emit(false);
      this.onDestroy = true;
    });
  }

//   formatTime(prop: number): string {

//     const date = new Date(prop);
//     let month = '' + date.getMonth();
//     let hour = '' + date.getHours();

//     if (+month < 10) {
//       month = `0${+month + 1}`;
//     }

//     if (+hour < 10) {
//       hour = `0${hour}`;
//     }

//     return `${date.getDate()}/${month}/${date.getFullYear()} ${hour}:${date.getMinutes()}`;
//   }
}
