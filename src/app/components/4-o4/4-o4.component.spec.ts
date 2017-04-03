import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { 4O4Component } from './4-o4.component';

describe('4O4Component', () => {
  let component: 4O4Component;
  let fixture: ComponentFixture<4O4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 4O4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(4O4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
