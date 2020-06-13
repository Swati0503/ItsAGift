import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhawalComponent } from './dhawal.component';

describe('DhawalComponent', () => {
  let component: DhawalComponent;
  let fixture: ComponentFixture<DhawalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhawalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
