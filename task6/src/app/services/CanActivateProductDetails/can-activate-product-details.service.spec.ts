import { TestBed } from '@angular/core/testing';

import { CanActivateProductDetailsService } from './can-activate-product-details.service';

describe('CanActivateProductDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanActivateProductDetailsService = TestBed.get(CanActivateProductDetailsService);
    expect(service).toBeTruthy();
  });
});
