import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSearchSelectComponent } from './multiple-search-select.component';

describe('MultipleSearchSelectComponent', () => {
  let component: MultipleSearchSelectComponent;
  let fixture: ComponentFixture<MultipleSearchSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleSearchSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultipleSearchSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
