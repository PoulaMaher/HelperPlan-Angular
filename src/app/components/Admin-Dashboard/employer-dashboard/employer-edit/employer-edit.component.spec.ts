import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerEditComponent } from './employer-edit.component';

describe('EmployerEditComponent', () => {
  let component: EmployerEditComponent;
  let fixture: ComponentFixture<EmployerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
