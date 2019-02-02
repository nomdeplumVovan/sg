import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSecurityComponent } from './logo-security.component';

describe('LogoSecurityComponent', () => {
  let component: LogoSecurityComponent;
  let fixture: ComponentFixture<LogoSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
