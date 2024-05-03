import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateResumeComponent } from './candidate-resume.component';

describe('CandidateResumeComponent', () => {
  let component: CandidateResumeComponent;
  let fixture: ComponentFixture<CandidateResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateResumeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandidateResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
