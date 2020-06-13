import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativesVideoComponent } from './relatives-video.component';

describe('RelativesVideoComponent', () => {
  let component: RelativesVideoComponent;
  let fixture: ComponentFixture<RelativesVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelativesVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelativesVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
