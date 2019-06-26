import { TestBed } from '@angular/core/testing';

import { ProductsDetailsResolveService } from './products-details-resolve.service';

describe('ProductsDetailsResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsDetailsResolveService = TestBed.get(ProductsDetailsResolveService);
    expect(service).toBeTruthy();
  });
});
