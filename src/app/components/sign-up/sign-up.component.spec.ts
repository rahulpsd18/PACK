import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInUpComponent } from './sign-up.component';

describe('SignInUpComponent', () => {
  let component: SignInUpComponent;
  let fixture: ComponentFixture<SignInUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
