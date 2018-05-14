import { Component, OnInit, OnDestroy } from '@angular/core';
import { NoticeCreatorComponent } from '../notice-creator/notice-creator.component';
import { DataAndFlagsService } from '../Services/data-and-flags.service';
import { HttpService } from '../Services/http.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

const titleText = 'Enter a title';
const noticeText = 'Notice...';

@Component({
  selector: 'app-notice-editor',
  templateUrl: './notice-editor.component.html',
  styleUrls: ['./notice-editor.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.15s ease-in')
      ]),
      transition('* => void', [
        animate('0.2s 0.1s ease-out', style({
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ]
})
export class NoticeEditorComponent extends NoticeCreatorComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  noticeOne: any;

  constructor(public dataAndFlagService: DataAndFlagsService, private http: HttpService,
    private route: ActivatedRoute, private router: Router) {

    super(dataAndFlagService);

  }

  ngOnInit() {
    this.subscription = this.route.paramMap.switchMap((params: ParamMap) => {
      const id = +params.get('id');
      return this.http.getNoticeOne(id);
    }).subscribe((data) => {
      this.noticeOne = data;
      this.title = this.noticeOne.title;
      this.notice = this.noticeOne.notice;
      this.currentColor = this.noticeOne.color;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goBack() {
    this.router.navigate(['../']);
  }

}
