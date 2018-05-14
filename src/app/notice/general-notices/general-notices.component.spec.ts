import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralNoticesComponent } from './general-notices.component';

describe('GeneralNoticesComponent', () => {
  let component: GeneralNoticesComponent;
  let fixture: ComponentFixture<GeneralNoticesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralNoticesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
