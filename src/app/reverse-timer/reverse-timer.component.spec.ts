import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseTimerComponent } from './reverse-timer.component';

describe('ReverseTimerComponent', () => {
  let component: ReverseTimerComponent;
  let fixture: ComponentFixture<ReverseTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReverseTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReverseTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
