import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GunjanComponent } from './gunjan.component';

describe('GunjanComponent', () => {
  let component: GunjanComponent;
  let fixture: ComponentFixture<GunjanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GunjanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GunjanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
