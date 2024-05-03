import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSelectComponent } from './mat-select.component';

describe('MatSelectComponent', () => {
  let component: MatSelectComponent;
  let fixture: ComponentFixture<MatSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
