import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../Services/http.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-container-notices',
  templateUrl: './container-notices.component.html',
  styleUrls: ['./container-notices.component.css']
})
export class ContainerNoticesComponent implements OnInit, OnDestroy {
  // create Notice class like type in the future
  notes: any;
  subscription: Subscription;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getAllNotices();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getAllNotices() {
    this.subscription = this.httpService.getAllNotices().subscribe((data) => { this.notes = data; });
  }


}
