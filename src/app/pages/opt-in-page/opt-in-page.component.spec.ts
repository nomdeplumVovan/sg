import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptInPageComponent } from './opt-in-page.component';

describe('OptInPageComponent', () => {
  let component: OptInPageComponent;
  let fixture: ComponentFixture<OptInPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptInPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
