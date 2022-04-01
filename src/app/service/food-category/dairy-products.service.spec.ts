import { TestBed } from '@angular/core/testing';

import { DairyProductsService } from './dairy-products.service';

describe('DairyProductsService', () => {
  let service: DairyProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DairyProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
