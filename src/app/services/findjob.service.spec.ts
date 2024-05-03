import { TestBed } from '@angular/core/testing';

import { FindjobService } from './findjob.service';

describe('FindjobService', () => {
  let service: FindjobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindjobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
