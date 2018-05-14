import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperNoticesComponent } from './wrapper-notices.component';

describe('WrapperNoticesComponent', () => {
  let component: WrapperNoticesComponent;
  let fixture: ComponentFixture<WrapperNoticesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapperNoticesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
