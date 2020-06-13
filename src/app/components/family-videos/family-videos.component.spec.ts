import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyVideosComponent } from './family-videos.component';

describe('FamilyVideosComponent', () => {
  let component: FamilyVideosComponent;
  let fixture: ComponentFixture<FamilyVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
