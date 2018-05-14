import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NoticeCreatorComponent } from '../notice-creator/notice-creator.component';
import { DataAndFlagsService } from '../Services/data-and-flags.service';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-usual-notice',
  templateUrl: './usual-notice.component.html',
  styleUrls: ['./usual-notice.component.css']
})
export class UsualNoticeComponent extends NoticeCreatorComponent implements OnInit, OnDestroy {
  @Input() notes;

  isListView: boolean;
  subscription: Subscription;

  constructor(public dataAndFlagsService: DataAndFlagsService) {
    super(dataAndFlagsService);
   }

  ngOnInit() {
    this.getListViewVal();
  }

  getListViewVal() {
    this.subscription = this.dataAndFlagsService.getListViewVal().map((val) => this.isListView = val ).subscribe();
    return this.isListView;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
