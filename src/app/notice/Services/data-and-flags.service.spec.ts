import { TestBed, inject } from '@angular/core/testing';

import { DataAndFlagsService } from './data-and-flags.service';

describe('DataAndFlagsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataAndFlagsService]
    });
  });

  it('should be created', inject([DataAndFlagsService], (service: DataAndFlagsService) => {
    expect(service).toBeTruthy();
  }));
});
