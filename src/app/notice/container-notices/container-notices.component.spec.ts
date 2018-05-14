import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerNoticesComponent } from './container-notices.component';

describe('ContainerNoticesComponent', () => {
  let component: ContainerNoticesComponent;
  let fixture: ComponentFixture<ContainerNoticesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerNoticesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
