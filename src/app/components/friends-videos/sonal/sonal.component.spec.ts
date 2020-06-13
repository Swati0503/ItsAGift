import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonalComponent } from './sonal.component';

describe('SonalComponent', () => {
  let component: SonalComponent;
  let fixture: ComponentFixture<SonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
