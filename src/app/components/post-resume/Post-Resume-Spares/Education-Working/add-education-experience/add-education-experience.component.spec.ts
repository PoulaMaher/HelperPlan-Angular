import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEducationExperienceComponent } from './add-education-experience.component';

describe('AddEducationExperienceComponent', () => {
  let component: AddEducationExperienceComponent;
  let fixture: ComponentFixture<AddEducationExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEducationExperienceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEducationExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
