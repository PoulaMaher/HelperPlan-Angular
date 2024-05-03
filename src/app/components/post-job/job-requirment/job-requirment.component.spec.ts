import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobRequirmentComponent } from './job-requirment.component';

describe('JobRequirmentComponent', () => {
  let component: JobRequirmentComponent;
  let fixture: ComponentFixture<JobRequirmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobRequirmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobRequirmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
