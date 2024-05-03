import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingExperienceComponent } from './working-experience.component';

describe('WorkingExperienceComponent', () => {
  let component: WorkingExperienceComponent;
  let fixture: ComponentFixture<WorkingExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkingExperienceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkingExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
