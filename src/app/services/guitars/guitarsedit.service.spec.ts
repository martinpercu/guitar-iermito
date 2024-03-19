import { TestBed } from '@angular/core/testing';

import { GuitarseditService } from './guitarsedit.service';

describe('GuitarseditService', () => {
  let service: GuitarseditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuitarseditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
