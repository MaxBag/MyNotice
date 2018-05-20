import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeContainerWrapperComponent } from './notice-container-wrapper.component';

describe('NoticeContainerWrapperComponent', () => {
  let component: NoticeContainerWrapperComponent;
  let fixture: ComponentFixture<NoticeContainerWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeContainerWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeContainerWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
