import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyToBeVideosComponent } from './family-to-be-videos.component';

describe('FamilyToBeVideosComponent', () => {
  let component: FamilyToBeVideosComponent;
  let fixture: ComponentFixture<FamilyToBeVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyToBeVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyToBeVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
