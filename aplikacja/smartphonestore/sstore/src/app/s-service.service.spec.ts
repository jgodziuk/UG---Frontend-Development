import { TestBed, inject } from '@angular/core/testing';

import { SServiceService } from './s-service.service';

describe('SServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SServiceService]
    });
  });

  it('should be created', inject([SServiceService], (service: SServiceService) => {
    expect(service).toBeTruthy();
  }));
});
