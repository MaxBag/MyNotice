import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataAndFlagsService } from '../../notice/Services/data-and-flags.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  isBtnShowMenuClicked: boolean;
  subscription: Subscription;
  constructor(private dataAndFlagsService: DataAndFlagsService) { }

  ngOnInit() {
    this.getBtnShowMenuClicked();
  }

  getBtnShowMenuClicked() {
    this.subscription = this.dataAndFlagsService.getBtnShowMenuClicked().subscribe((condition) => this.isBtnShowMenuClicked = condition);
    return this.isBtnShowMenuClicked;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
