import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCandidateComponent } from './delete-candidate.component';

describe('DeleteCandidateComponent', () => {
  let component: DeleteCandidateComponent;
  let fixture: ComponentFixture<DeleteCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCandidateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
