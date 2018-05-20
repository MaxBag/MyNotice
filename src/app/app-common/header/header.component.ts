import { Component, OnInit } from '@angular/core';
import { DataAndFlagsService } from '../../notice/Services/data-and-flags.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isBtnShown = false;
  isListView = true;
  isBtnShowMenuClicked = false;
  isFocused = false;

  constructor(private dataAndFlagsService: DataAndFlagsService, private router: Router) { }

  ngOnInit() {
  }

  searchIssue($event, searchIssueField) {
    $event.preventDefault();

    if (searchIssueField.value.trim() !== '') {
      this.dataAndFlagsService.setBtnSearchClicked(true);
     // this.dataAndFlagsService.setSearchableText(searchIssueField.value);
      this.router.navigate(['..', 'notices', 'search'], {queryParams: {input: searchIssueField.value}});
    }
  }

  onBtnMenuClick() {
    this.isBtnShowMenuClicked = !this.isBtnShowMenuClicked;
    this.dataAndFlagsService.setBtnShowMenu(this.isBtnShowMenuClicked);
  }

  showBtnClose() {
    this.isBtnShown = true;
    this.isFocused = true;
  }

  hideBtnClose(searchIssueField) {
    searchIssueField.value = '';
    this.isBtnShown = false;
    this.dataAndFlagsService.setBtnSearchClicked(false);
    this.router.navigate(['notices']);
  }

  headerChangeColor() {
    this.isFocused = !this.isFocused;
  }

  onChangeBtnView() {
    this.isListView = !this.isListView;
    this.dataAndFlagsService.setListView(this.isListView);
  }

}
