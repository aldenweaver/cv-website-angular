import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipExperienceComponent } from './leadership-experience.component';

describe('LeadershipExperienceComponent', () => {
  let component: LeadershipExperienceComponent;
  let fixture: ComponentFixture<LeadershipExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadershipExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
