import { TestBed } from '@angular/core/testing';

import { FcandidateService } from './fcandidate.service';

describe('FcandidateService', () => {
  let service: FcandidateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FcandidateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
