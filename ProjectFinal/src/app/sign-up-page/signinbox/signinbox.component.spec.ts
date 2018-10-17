import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninboxComponent } from './signinbox.component';

describe('SigninboxComponent', () => {
  let component: SigninboxComponent;
  let fixture: ComponentFixture<SigninboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
