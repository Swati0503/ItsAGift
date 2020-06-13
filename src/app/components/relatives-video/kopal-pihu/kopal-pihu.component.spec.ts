import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KopalPihuComponent } from './kopal-pihu.component';

describe('KopalPihuComponent', () => {
  let component: KopalPihuComponent;
  let fixture: ComponentFixture<KopalPihuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KopalPihuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KopalPihuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
