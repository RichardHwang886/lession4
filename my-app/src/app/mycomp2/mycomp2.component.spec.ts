import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mycomp2Component } from './mycomp2.component';

describe('Mycomp2Component', () => {
  let component: Mycomp2Component;
  let fixture: ComponentFixture<Mycomp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mycomp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mycomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
