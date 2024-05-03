import { TestBed } from '@angular/core/testing';

import { ProfessionalInformationDataProviderService } from './professional-information-data-provider.service';

describe('ProfessionalInformationDataProviderService', () => {
  let service: ProfessionalInformationDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessionalInformationDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
