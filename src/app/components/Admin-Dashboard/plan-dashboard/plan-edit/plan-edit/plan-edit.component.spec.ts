import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanEditComponent } from './plan-edit.component';

describe('PlanEditComponent', () => {
  let component: PlanEditComponent;
  let fixture: ComponentFixture<PlanEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
