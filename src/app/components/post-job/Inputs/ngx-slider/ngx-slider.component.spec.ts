import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSliderComponent } from './ngx-slider.component';

describe('NgxSliderComponent', () => {
  let component: NgxSliderComponent;
  let fixture: ComponentFixture<NgxSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
