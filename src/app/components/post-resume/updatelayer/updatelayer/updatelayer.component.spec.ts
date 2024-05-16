import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatelayerComponent } from './updatelayer.component';

describe('UpdatelayerComponent', () => {
  let component: UpdatelayerComponent;
  let fixture: ComponentFixture<UpdatelayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatelayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatelayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
