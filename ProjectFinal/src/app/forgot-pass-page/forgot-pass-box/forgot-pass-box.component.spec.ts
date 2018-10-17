import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPassBoxComponent } from './forgot-pass-box.component';

describe('ForgotPassBoxComponent', () => {
  let component: ForgotPassBoxComponent;
  let fixture: ComponentFixture<ForgotPassBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPassBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPassBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
