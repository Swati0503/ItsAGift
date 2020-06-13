import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AshuComponent } from './ashu.component';

describe('AshuComponent', () => {
  let component: AshuComponent;
  let fixture: ComponentFixture<AshuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AshuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AshuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
