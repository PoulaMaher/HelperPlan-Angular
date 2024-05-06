import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlacesComponent } from './home-places.component';

describe('HomePlacesComponent', () => {
  let component: HomePlacesComponent;
  let fixture: ComponentFixture<HomePlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePlacesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
