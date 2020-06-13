import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AshuDaComponent } from './ashu-da.component';

describe('AshuDaComponent', () => {
  let component: AshuDaComponent;
  let fixture: ComponentFixture<AshuDaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AshuDaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AshuDaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
