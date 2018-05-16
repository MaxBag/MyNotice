import { Component, OnInit, OnDestroy, DoCheck, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../Services/http.service';
import { Subscription } from 'rxjs/Subscription';
import { DataAndFlagsService } from '../Services/data-and-flags.service';

@Component({
  selector: 'app-container-notices',
  templateUrl: './container-notices.component.html',
  styleUrls: ['./container-notices.component.css']
})
export class ContainerNoticesComponent implements OnInit, OnDestroy {

  @Input() set addNewNotice(isAddedNotice: boolean) {
    this.getAllNotices();
  }

  @Output() addedNewNotice = new EventEmitter<boolean>();

  notes$: any;
  subscription: Subscription;
  subscriptionOnAddedNewNotice: Subscription;

  constructor(private httpService: HttpService, private dataAndFlags: DataAndFlagsService) { }

  ngOnInit() {
    this.getAllNotices();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getAllNotices() {
    this.subscription = this.httpService.getAllNotices().subscribe((data) => {
      this.notes$ = data.reverse();
      this.addedNewNotice.emit(false);
    });
  }

  // checkAdded() {
  //   this.subscriptionOnAddedNewNotice = this.dataAndFlags.addedNewNotice().subscribe(() => this.getAllNotices());
  // }

}
