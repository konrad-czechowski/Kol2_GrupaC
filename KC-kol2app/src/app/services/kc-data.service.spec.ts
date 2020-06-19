import { TestBed } from '@angular/core/testing';

import { KCDataService } from './kc-data.service';

describe('KCDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KCDataService = TestBed.get(KCDataService);
    expect(service).toBeTruthy();
  });
});
