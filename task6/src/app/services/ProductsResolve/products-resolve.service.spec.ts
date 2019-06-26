import { TestBed } from '@angular/core/testing';

import { ProductsResolveService } from './products-resolve.service';

describe('ProductsResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsResolveService = TestBed.get(ProductsResolveService);
    expect(service).toBeTruthy();
  });
});
