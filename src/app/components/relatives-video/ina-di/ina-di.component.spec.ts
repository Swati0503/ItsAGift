import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InaDiComponent } from './ina-di.component';

describe('InaDiComponent', () => {
  let component: InaDiComponent;
  let fixture: ComponentFixture<InaDiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InaDiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InaDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
