import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MumalComponent } from './mumal.component';

describe('MumalComponent', () => {
  let component: MumalComponent;
  let fixture: ComponentFixture<MumalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MumalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MumalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
