import { TestBed } from '@angular/core/testing';

import { RaiderService } from './raider.service';

describe('RaiderService', () => {
  let service: RaiderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaiderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
