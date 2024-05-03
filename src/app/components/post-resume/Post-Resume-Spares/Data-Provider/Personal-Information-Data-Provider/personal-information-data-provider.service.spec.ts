import { TestBed } from '@angular/core/testing';

import { PersonalInformationDataProviderService } from './personal-information-data-provider.service';

describe('PersonalInformationDataProviderService', () => {
  let service: PersonalInformationDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalInformationDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
