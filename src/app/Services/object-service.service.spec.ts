import { TestBed } from '@angular/core/testing';

import { ObjectServiceService } from './object-service.service';

describe('ObjectServiceService', () => {
  let service: ObjectServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
