import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyHeaderComponent } from './agency-header.component';

describe('AgencyHeaderComponent', () => {
  let component: AgencyHeaderComponent;
  let fixture: ComponentFixture<AgencyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencyHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgencyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
