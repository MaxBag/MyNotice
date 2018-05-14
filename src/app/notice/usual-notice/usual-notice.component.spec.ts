import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsualNoticeComponent } from './usual-notice.component';

describe('UsualNoticeComponent', () => {
  let component: UsualNoticeComponent;
  let fixture: ComponentFixture<UsualNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsualNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsualNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
