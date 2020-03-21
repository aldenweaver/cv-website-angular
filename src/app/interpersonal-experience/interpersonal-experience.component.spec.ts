import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpersonalExperienceComponent } from './experience.component';

describe('InterpersonalExperienceComponent', () => {
  let component: InterpersonalExperienceComponent;
  let fixture: ComponentFixture<InterpersonalExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpersonalExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpersonalExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
