import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholeAgencyPageComponent } from './whole-agency-page.component';

describe('WholeAgencyPageComponent', () => {
  let component: WholeAgencyPageComponent;
  let fixture: ComponentFixture<WholeAgencyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WholeAgencyPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WholeAgencyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
