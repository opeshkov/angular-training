import { TestBed } from '@angular/core/testing';

import { CanActivateProductsService } from './can-activate-products.service';

describe('CanActivateProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanActivateProductsService = TestBed.get(CanActivateProductsService);
    expect(service).toBeTruthy();
  });
});
