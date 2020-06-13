import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuptaComponent } from './gupta.component';

describe('GuptaComponent', () => {
  let component: GuptaComponent;
  let fixture: ComponentFixture<GuptaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuptaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuptaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
