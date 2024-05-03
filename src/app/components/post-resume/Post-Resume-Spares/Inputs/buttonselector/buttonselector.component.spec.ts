import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonselectorComponent } from './buttonselector.component';

describe('ButtonselectorComponent', () => {
  let component: ButtonselectorComponent;
  let fixture: ComponentFixture<ButtonselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonselectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
