import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadidateListComponent } from './cadidate-list.component';

describe('CadidateListComponent', () => {
  let component: CadidateListComponent;
  let fixture: ComponentFixture<CadidateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadidateListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadidateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
