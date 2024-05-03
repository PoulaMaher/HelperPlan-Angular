import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateCardComponent } from './candidate-card.component';

describe('CandidateCardComponent', () => {
  let component: CandidateCardComponent;
  let fixture: ComponentFixture<CandidateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandidateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
