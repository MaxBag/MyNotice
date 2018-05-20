import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataAndFlagsService } from '../Services/data-and-flags.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-wrapper-notices',
  templateUrl: './wrapper-notices.component.html',
  styleUrls: ['./wrapper-notices.component.css']
})
export class WrapperNoticesComponent implements OnInit, OnDestroy {

  isAddedNotice = false;
  notes = [];
  subscription: Subscription;

  constructor(private dataAndFlags: DataAndFlagsService) { }

  ngOnInit() {
    this.getAllNotice();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  renderAllNotices(data: boolean) {
    this.isAddedNotice = data;
  }

  reRenderAllNotices(data: boolean) {
    this.isAddedNotice = data;
  }

  getAllNotice() {
    this.subscription = this.dataAndFlags.getAllNotes().subscribe(data => {
      this.notes = data.reverse();
    });
  }

}
