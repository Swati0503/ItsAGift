import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuComponent } from './anu.component';

describe('AnuComponent', () => {
  let component: AnuComponent;
  let fixture: ComponentFixture<AnuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
