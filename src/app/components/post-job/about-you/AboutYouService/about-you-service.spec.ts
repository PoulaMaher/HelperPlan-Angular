import { TestBed } from '@angular/core/testing';

import { AboutYouServiceService } from './about-you-service';

describe('AboutYouServiceService', () => {
  let service: AboutYouServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutYouServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
