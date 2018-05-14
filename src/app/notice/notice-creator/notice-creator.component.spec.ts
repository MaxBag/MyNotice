import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeCreatorComponent } from './notice-creator.component';

describe('NoticeCreatorComponent', () => {
  let component: NoticeCreatorComponent;
  let fixture: ComponentFixture<NoticeCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
