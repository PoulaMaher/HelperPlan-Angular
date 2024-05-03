import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribePublishComponent } from './subscribe-publish.component';

describe('SubscribePublishComponent', () => {
  let component: SubscribePublishComponent;
  let fixture: ComponentFixture<SubscribePublishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscribePublishComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscribePublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
