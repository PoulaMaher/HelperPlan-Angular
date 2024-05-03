import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutYouComponent } from './about-you.component';

describe('AboutYouComponent', () => {
  let component: AboutYouComponent;
  let fixture: ComponentFixture<AboutYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutYouComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
