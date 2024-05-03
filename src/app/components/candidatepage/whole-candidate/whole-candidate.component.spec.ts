import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholeCandidateComponent } from './whole-candidate.component';

describe('WholeCandidateComponent', () => {
  let component: WholeCandidateComponent;
  let fixture: ComponentFixture<WholeCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WholeCandidateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WholeCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
