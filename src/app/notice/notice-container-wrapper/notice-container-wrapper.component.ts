import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataAndFlagsService } from '../Services/data-and-flags.service';
import { Subscription } from 'rxjs/Subscription';
import { HttpService } from '../Services/http.service';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-notice-container-wrapper',
  templateUrl: './notice-container-wrapper.component.html',
  styleUrls: ['./notice-container-wrapper.component.css']
})
export class NoticeContainerWrapperComponent implements OnInit, OnDestroy {

  constructor(private dataAndFlags: DataAndFlagsService, private httpService: HttpService, private route: ActivatedRoute ) { }

  emptySearch = false;
  subscription: Subscription;
  notes$;

  ngOnInit() {
    this.getNotesFromSearch();
  }

  ngOnDestroy() {
    this.emptySearch = false;
    this.subscription.unsubscribe();
  }

  getNotesFromSearch() {
    let searchableTextRegExp;

    this.subscription = this.route.queryParams.switchMap((params: Params) => {
      searchableTextRegExp = new RegExp(`${params['input']}`, 'i');
      return this.httpService.getAllNotices();
    }).subscribe(data => {
      this.notes$ = data.filter(obj => obj.title.search(searchableTextRegExp) > -1);
      if (this.notes$.length === 0) {
        this.emptySearch = true;
      }
      this.dataAndFlags.isBtnSearchClicked = false;

    });
  }

}
