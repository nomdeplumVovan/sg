import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRegComponent } from './header-reg.component';

describe('HeaderRegComponent', () => {
  let component: HeaderRegComponent;
  let fixture: ComponentFixture<HeaderRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
