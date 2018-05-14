import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeEditorContainerComponent } from './notice-editor-container.component';

describe('NoticeEditorContainerComponent', () => {
  let component: NoticeEditorContainerComponent;
  let fixture: ComponentFixture<NoticeEditorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeEditorContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeEditorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
